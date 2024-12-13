import React from 'react';
import type { Company, StrategyCard } from '../types';

interface StrategySummaryProps {
  company: Company;
  selectedCards: StrategyCard[];
}

export function StrategySummary({ company, selectedCards }: StrategySummaryProps) {
  if (selectedCards.length === 0) return null;

  const totalCost = selectedCards.reduce((sum, card) => sum + card.cost, 0);
  const requiredEmployees = selectedCards.reduce((sum, card) => sum + card.employeesRequired, 0);
  const availableEmployees = company.employees.available;

  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Selected Strategy Summary</h3>
      <div className="space-y-4">
        <p className="text-gray-700">Total Cost: <span className="font-semibold">${totalCost}M</span></p>
        <p className="text-gray-700">Required Employees: <span className="font-semibold">{requiredEmployees}</span></p>
        <p className="text-gray-700">Available Employees: <span className="font-semibold">{availableEmployees}</span></p>
      </div>
    </div>
  );
}