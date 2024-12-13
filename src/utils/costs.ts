import type { Product, Company, StrategyCard, MarketCondition } from '../types';

export function calculateProductionCosts(
  product: Product,
  costReduction: number,
  marketCondition: MarketCondition
): number {
  return (
    product.productionCost *
    (1 - costReduction) *
    marketCondition.costMultiplier *
    product.employeesNeeded
  );
}

export function calculateImplementationCosts(cards: StrategyCard[]): number {
  return cards.reduce((sum, card) => sum + card.cost, 0);
}

export function calculateEmployeeCosts(
  company: Company,
  selectedCards: StrategyCard[]
): number {
  const totalEmployeesUsed = selectedCards.reduce(
    (sum, card) => sum + card.employeesRequired,
    0
  );
  return (company.employees.salary / 1000000) * totalEmployeesUsed;
}