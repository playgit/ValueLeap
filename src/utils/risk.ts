import type { StrategyCard } from '../types';

const RISK_WEIGHTS = {
  LOW: 0.9,
  MEDIUM: 0.7,
  HIGH: 0.5
} as const;

export function calculateRiskFactor(cards: StrategyCard[]): number {
  if (cards.length === 0) return 1;
  
  const totalRisk = cards.reduce(
    (sum, card) => sum + RISK_WEIGHTS[card.impact.riskLevel],
    0
  );
  
  return totalRisk / cards.length;
}

export function getRiskLevel(riskFactor: number): 'LOW' | 'MEDIUM' | 'HIGH' {
  if (riskFactor >= 0.8) return 'LOW';
  if (riskFactor >= 0.6) return 'MEDIUM';
  return 'HIGH';
}

export function getRiskImpact(riskFactor: number): number {
  return 0.5 + (riskFactor * 0.5); // Scale from 50% to 100% effectiveness
}