import type { MarketCondition } from '../types';

export const marketConditions: MarketCondition[] = [
  {
    id: 'boom',
    name: 'Economic Boom',
    description: 'Strong economic growth with high demand and stable costs',
    demandMultiplier: 1.2,
    costMultiplier: 1.0
  },
  {
    id: 'recession',
    name: 'Economic Recession',
    description: 'Reduced consumer spending and increased operational costs',
    demandMultiplier: 0.8,
    costMultiplier: 1.1
  },
  {
    id: 'normal',
    name: 'Stable Market',
    description: 'Balanced market conditions with steady demand',
    demandMultiplier: 1.0,
    costMultiplier: 1.0
  },
  {
    id: 'disruption',
    name: 'Market Disruption',
    description: 'Rapid changes in market dynamics and consumer behavior',
    demandMultiplier: 1.1,
    costMultiplier: 1.2
  }
];