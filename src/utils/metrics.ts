import type { Company, StrategyCard, MarketCondition } from '../types';

export function calculateEmployeeUtilization(
  company: Company,
  selectedCards: StrategyCard[]
): number {
  const totalEmployeesRequired = selectedCards.reduce(
    (sum, card) => sum + card.employeesRequired,
    0
  );
  return Math.min(totalEmployeesRequired / company.employees.total, 1);
}

export function calculateProductionEfficiency(
  selectedCards: StrategyCard[]
): number {
  return selectedCards.reduce(
    (total, card) => total + (card.impact.productivityBoost || 0),
    1
  );
}

export function calculateMarketShare(
  totalRevenue: number,
  companyRevenue: number,
  marketCondition: MarketCondition
): number {
  return totalRevenue / (totalRevenue + (companyRevenue * marketCondition.demandMultiplier));
}

export function calculateCustomerSatisfaction(
  productivityBoost: number,
  marketDemandBoost: number
): number {
  return Math.min((productivityBoost + marketDemandBoost) / 2, 1);
}