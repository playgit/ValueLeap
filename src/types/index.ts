export interface Product {
  id: string;
  name: string;
  price: number;
  productionCost: number;
  marketDemand: number;
  employeesNeeded: number;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  currentEBITDA: number;
  revenue: number;
  employees: {
    total: number;
    available: number;
    salary: number;
  };
  cash: number;
  products: Product[];
  image: string;
}

export interface StrategyCard {
  id: string;
  title: string;
  description: string;
  type: 'OPTIMIZE' | 'INNOVATE' | 'EXPAND';
  cost: number;
  employeesRequired: number;
  impact: {
    productivityBoost: number;
    marketDemandBoost: number;
    costReduction: number;
    newProducts?: Product[];
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  };
}

export interface MarketCondition {
  id: string;
  name: string;
  description: string;
  demandMultiplier: number;
  costMultiplier: number;
}

export interface SimulationState {
  company: Company | null;
  selectedCards: StrategyCard[];
  currentEBITDA: number;
  currentRevenue: number;
  marketCondition: MarketCondition;
  round: number;
  metrics: {
    employeeUtilization: number;
    productionEfficiency: number;
    marketShare: number;
    customerSatisfaction: number;
  };
}