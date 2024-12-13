import type { SimulationState, StrategyCard } from '../types';

export function calculateRoundImpact(state: SimulationState): {
  newEBITDA: number;
  newRevenue: number;
  riskFactor: number;
} {
  const baseEBITDA = state.currentEBITDA;
  const baseRevenue = state.currentRevenue;
  
  let totalEBITDAGrowth = 0;
  let totalRevenueGrowth = 0;
  let riskFactor = 1;

  state.selectedCards.forEach((card) => {
    totalEBITDAGrowth += card.impact.ebitdaGrowth;
    totalRevenueGrowth += card.impact.revenueGrowth;
    
    // Risk factors affect the success rate
    riskFactor *= card.impact.riskLevel === 'HIGH' ? 0.7 :
                  card.impact.riskLevel === 'MEDIUM' ? 0.85 : 
                  0.95;
  });

  // Apply risk factor to growth rates
  const effectiveEBITDAGrowth = totalEBITDAGrowth * riskFactor;
  const effectiveRevenueGrowth = totalRevenueGrowth * riskFactor;

  return {
    newEBITDA: baseEBITDA * (1 + effectiveEBITDAGrowth / 100),
    newRevenue: baseRevenue * (1 + effectiveRevenueGrowth / 100),
    riskFactor
  };
}

export function generateFeedback(
  selectedCards: StrategyCard[],
  riskFactor: number
): string {
  const cardTypes = selectedCards.map(card => card.type);
  const hasBalance = new Set(cardTypes).size >= 2;
  const riskLevel = riskFactor < 0.75 ? 'high' : riskFactor < 0.9 ? 'moderate' : 'low';
  
  let feedback = '';
  
  if (!hasBalance) {
    feedback += 'Consider diversifying your strategy types for better results. ';
  }
  
  if (riskLevel === 'high') {
    feedback += 'Your strategy combination carries significant risk. Consider balancing with lower-risk initiatives. ';
  }
  
  if (selectedCards.length < 3) {
    feedback += 'You can select more strategy cards to potentially increase your impact. ';
  }
  
  return feedback || 'Your strategy looks well-balanced!';
}