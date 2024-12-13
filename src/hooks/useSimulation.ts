import { useState } from 'react';
import { marketConditions } from '../data/marketConditions';
import { calculateEBITDA, calculateRiskFactor } from '../utils/financialCalculations';
import type { Company, StrategyCard, SimulationState } from '../types';

const initialState: SimulationState = {
  company: null,
  selectedCards: [],
  currentEBITDA: 0,
  currentRevenue: 0,
  round: 1,
  marketCondition: marketConditions[2], // Start with stable market
  metrics: {
    employeeUtilization: 0,
    productionEfficiency: 0,
    marketShare: 0,
    customerSatisfaction: 0
  }
};

export function useSimulation() {
  const [simulation, setSimulation] = useState<SimulationState>(initialState);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleCompanySelect = (company: Company) => {
    setSimulation({
      ...simulation,
      company,
      currentEBITDA: company.currentEBITDA,
      currentRevenue: company.revenue
    });
  };

  const handleStrategyCardSelect = (card: StrategyCard) => {
    if (!simulation.company) return;

    const totalEmployeesNeeded = simulation.selectedCards.reduce(
      (sum, c) => sum + c.employeesRequired, 
      0
    );

    if (simulation.selectedCards.find(c => c.id === card.id)) {
      setSimulation({
        ...simulation,
        selectedCards: simulation.selectedCards.filter(c => c.id !== card.id)
      });
    } else if (
      simulation.selectedCards.length < 3 && 
      totalEmployeesNeeded + card.employeesRequired <= simulation.company.employees.available
    ) {
      setSimulation({
        ...simulation,
        selectedCards: [...simulation.selectedCards, card]
      });
    }
  };

  const handleExecuteStrategy = () => {
    if (!simulation.company) return;

    const result = calculateEBITDA(
      simulation.company,
      simulation.selectedCards,
      simulation.marketCondition
    );
    
    const riskFactor = calculateRiskFactor(simulation.selectedCards);
    const totalRevenue = result.revenueBreakdown.reduce((sum, item) => sum + item.revenue, 0);
    
    setResults({
      previousEBITDA: simulation.currentEBITDA,
      newEBITDA: result.newEBITDA,
      previousRevenue: simulation.currentRevenue,
      newRevenue: totalRevenue,
      riskFactor,
      feedback: generateFeedback(result)
    });
    
    setShowResults(true);
  };

  const generateFeedback = (result: any) => {
    const feedback = [];
    
    if (result.metrics.employeeUtilization > 0.8) {
      feedback.push("High employee utilization - consider hiring more staff.");
    }
    
    if (result.metrics.productionEfficiency < 0.6) {
      feedback.push("Production efficiency could be improved with optimization strategies.");
    }
    
    if (result.metrics.customerSatisfaction < 0.7) {
      feedback.push("Customer satisfaction needs attention - consider CX improvements.");
    }
    
    return feedback.join(" ") || "Your strategy execution was successful!";
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSimulation(prev => ({
      ...prev,
      currentEBITDA: results.newEBITDA,
      currentRevenue: results.newRevenue,
      selectedCards: [],
      round: prev.round + 1,
      marketCondition: marketConditions[Math.floor(Math.random() * marketConditions.length)]
    }));
  };

  const handleReset = () => {
    if (simulation.company) {
      setSimulation({
        ...simulation,
        currentEBITDA: simulation.company.currentEBITDA,
        currentRevenue: simulation.company.revenue,
        selectedCards: [],
        round: 1
      });
    }
  };

  return {
    simulation,
    showResults,
    results,
    handleCompanySelect,
    handleStrategyCardSelect,
    handleExecuteStrategy,
    handleCloseResults,
    handleReset
  };
}