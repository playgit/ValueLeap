export interface SimulationMetrics {
  employeeUtilization: number;
  productionEfficiency: number;
  marketShare: number;
  customerSatisfaction: number;
  riskFactor: number;
}

export interface SimulationResults {
  previousEBITDA: number;
  newEBITDA: number;
  previousRevenue: number;
  newRevenue: number;
  metrics: SimulationMetrics;
  revenueBreakdown: {
    product: string;
    revenue: number;
    cost: number;
  }[];
  feedback: string;
}