import type { StrategyCard } from '../types';

export const strategyCards: StrategyCard[] = [
  {
    id: '1',
    title: 'Digital Transformation Initiative',
    description: 'Implement AI-driven automation across operations',
    type: 'OPTIMIZE',
    cost: 5,
    employeesRequired: 50,
    impact: {
      productivityBoost: 0.2,
      marketDemandBoost: 0.1,
      costReduction: 0.15,
      riskLevel: 'MEDIUM'
    }
  },
  {
    id: '2',
    title: 'Market Expansion Program',
    description: 'Enter new geographic markets in Asia-Pacific',
    type: 'EXPAND',
    cost: 10,
    employeesRequired: 100,
    impact: {
      productivityBoost: 0.1,
      marketDemandBoost: 0.3,
      costReduction: 0,
      riskLevel: 'HIGH'
    }
  },
  {
    id: '3',
    title: 'Product Innovation Lab',
    description: 'Establish R&D center for next-gen products',
    type: 'INNOVATE',
    cost: 8,
    employeesRequired: 75,
    impact: {
      productivityBoost: 0.15,
      marketDemandBoost: 0.25,
      costReduction: 0.1,
      riskLevel: 'HIGH'
    }
  },
  {
    id: '4',
    title: 'Operational Excellence Program',
    description: 'Streamline processes and reduce operational costs',
    type: 'OPTIMIZE',
    cost: 3,
    employeesRequired: 30,
    impact: {
      productivityBoost: 0.1,
      marketDemandBoost: 0,
      costReduction: 0.2,
      riskLevel: 'LOW'
    }
  },
  {
    id: '5',
    title: 'Customer Experience Enhancement',
    description: 'Implement advanced CRM and support systems',
    type: 'OPTIMIZE',
    cost: 4,
    employeesRequired: 40,
    impact: {
      productivityBoost: 0.05,
      marketDemandBoost: 0.15,
      costReduction: 0.05,
      riskLevel: 'LOW'
    }
  }
];