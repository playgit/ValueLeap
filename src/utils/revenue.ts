import type { Product, MarketCondition } from '../types';

export function calculateBaseRevenue(
  product: Product,
  marketCondition: MarketCondition
): number {
  return product.marketDemand * product.price * marketCondition.demandMultiplier;
}

export function applyProductivityBoost(
  baseRevenue: number,
  productivityBoost: number,
  employeesNeeded: number
): number {
  return Math.min(baseRevenue * productivityBoost, baseRevenue * (employeesNeeded / 100));
}

export function applyMarketDemandBoost(
  revenue: number,
  marketDemandBoost: number
): number {
  return revenue * (1 + marketDemandBoost);
}