import type { Company, Product, StrategyCard, MarketCondition } from '../types';

export function calculateProductRevenue(
  product: Product,
  productivityBoost: number,
  marketDemand: number,
  marketCondition: MarketCondition
): number {
  const effectiveDemand = Math.min(
    product.marketDemand * (1 + marketDemand) * marketCondition.demandMultiplier,
    product.employeesNeeded * productivityBoost
  );
  
  return effectiveDemand * product.price;
}

export function calculateProductCost(
  product: Product,
  costReduction: number,
  marketCondition: MarketCondition
): number {
  return product.productionCost * 
    (1 - costReduction) * 
    marketCondition.costMultiplier * 
    product.employeesNeeded;
}

export function calculateEmployeeCosts(
  company: Company,
  selectedCards: StrategyCard[]
): number {
  const totalEmployeesUsed = selectedCards.reduce(
    (sum, card) => sum + card.employeesRequired,
    0
  );
  
  return (company.employees.salary / 1000000) * totalEmployeesUsed; // Convert to millions
}

export function calculateRiskFactor(selectedCards: StrategyCard[]): number {
  const riskWeights = {
    LOW: 0.9,
    MEDIUM: 0.7,
    HIGH: 0.5
  };

  const avgRisk = selectedCards.reduce((sum, card) => 
    sum + riskWeights[card.impact.riskLevel], 0
  ) / selectedCards.length;

  return avgRisk;
}

export function calculateEBITDA(
  company: Company,
  selectedCards: StrategyCard[],
  marketCondition: MarketCondition
): {
  newEBITDA: number;
  revenueBreakdown: { product: string; revenue: number; cost: number }[];
  metrics: {
    employeeUtilization: number;
    productionEfficiency: number;
    marketShare: number;
    customerSatisfaction: number;
  };
} {
  // Aggregate strategy card impacts
  const impacts = selectedCards.reduce(
    (acc, card) => ({
      productivityBoost: acc.productivityBoost + (card.impact.productivityBoost || 0),
      marketDemandBoost: acc.marketDemandBoost + (card.impact.marketDemandBoost || 0),
      costReduction: acc.costReduction + (card.impact.costReduction || 0)
    }),
    { productivityBoost: 1, marketDemandBoost: 0, costReduction: 0 }
  );

  // Calculate revenue and costs for each product
  const revenueBreakdown = company.products.map(product => {
    const revenue = calculateProductRevenue(
      product,
      impacts.productivityBoost,
      impacts.marketDemandBoost,
      marketCondition
    );
    
    const cost = calculateProductCost(
      product,
      impacts.costReduction,
      marketCondition
    );

    return {
      product: product.name,
      revenue: revenue / 1000000, // Convert to millions
      cost: cost / 1000000 // Convert to millions
    };
  });

  // Calculate total revenue and costs
  const totalRevenue = revenueBreakdown.reduce((sum, item) => sum + item.revenue, 0);
  const totalProductionCosts = revenueBreakdown.reduce((sum, item) => sum + item.cost, 0);
  const employeeCosts = calculateEmployeeCosts(company, selectedCards);
  const implementationCosts = selectedCards.reduce((sum, card) => sum + card.cost, 0);

  // Calculate metrics
  const employeeUtilization = Math.min(
    selectedCards.reduce((sum, card) => sum + card.employeesRequired, 0) /
    company.employees.total,
    1
  );

  const productionEfficiency = impacts.productivityBoost;
  
  const marketShare = totalRevenue / 
    (totalRevenue + (company.revenue * marketCondition.demandMultiplier));
  
  const customerSatisfaction = Math.min(
    (impacts.productivityBoost + impacts.marketDemandBoost) / 2,
    1
  );

  return {
    newEBITDA: totalRevenue - totalProductionCosts - employeeCosts - implementationCosts,
    revenueBreakdown,
    metrics: {
      employeeUtilization,
      productionEfficiency,
      marketShare,
      customerSatisfaction
    }
  };
}