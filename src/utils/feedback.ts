import type { SimulationMetrics } from '../types';

interface FeedbackRule {
  condition: (metrics: SimulationMetrics) => boolean;
  message: string;
}

const feedbackRules: FeedbackRule[] = [
  {
    condition: (metrics) => metrics.employeeUtilization > 0.8,
    message: "High employee utilization - consider hiring more staff."
  },
  {
    condition: (metrics) => metrics.productionEfficiency < 0.6,
    message: "Production efficiency could be improved with optimization strategies."
  },
  {
    condition: (metrics) => metrics.customerSatisfaction < 0.7,
    message: "Customer satisfaction needs attention - consider CX improvements."
  },
  {
    condition: (metrics) => metrics.marketShare < 0.3,
    message: "Low market share - consider market expansion strategies."
  }
];

export function generateFeedback(metrics: SimulationMetrics): string {
  const applicableFeedback = feedbackRules
    .filter(rule => rule.condition(metrics))
    .map(rule => rule.message);

  return applicableFeedback.length > 0
    ? applicableFeedback.join(" ")
    : "Your strategy execution was successful!";
}