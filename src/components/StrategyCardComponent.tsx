import React from 'react';
import { Users, DollarSign, AlertTriangle, Zap, Target, TrendingDown } from 'lucide-react';
import type { StrategyCard } from '../types';

interface StrategyCardProps {
  card: StrategyCard;
  onClick: (card: StrategyCard) => void;
  selected?: boolean;
}

export function StrategyCardComponent({ card, onClick, selected }: StrategyCardProps) {
  const typeColors = {
    OPTIMIZE: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    INNOVATE: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    EXPAND: 'bg-green-50 border-green-200 hover:bg-green-100'
  };

  const riskColors = {
    LOW: 'text-green-600',
    MEDIUM: 'text-yellow-600',
    HIGH: 'text-red-600'
  };

  return (
    <div
      onClick={() => onClick(card)}
      className={`
        relative p-6 rounded-lg border-2 cursor-pointer
        transition-all duration-300 transform
        ${typeColors[card.type]}
        ${selected ? 'ring-2 ring-offset-2 ring-blue-500 scale-102' : 'hover:scale-101'}
      `}
    >
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          card.type === 'OPTIMIZE' ? 'bg-blue-100 text-blue-800' :
          card.type === 'INNOVATE' ? 'bg-purple-100 text-purple-800' :
          'bg-green-100 text-green-800'
        }`}>
          {card.type}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
      <p className="text-gray-600 mb-4">{card.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center p-2 bg-white/50 rounded-lg">
          <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">Cost</p>
            <p className="font-semibold">${card.cost}M</p>
          </div>
        </div>

        <div className="flex items-center p-2 bg-white/50 rounded-lg">
          <Users className="h-5 w-5 text-purple-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">Employees</p>
            <p className="font-semibold">{card.employeesRequired}</p>
          </div>
        </div>

        <div className="flex items-center p-2 bg-white/50 rounded-lg">
          <AlertTriangle className={`h-5 w-5 mr-2 ${riskColors[card.impact.riskLevel]}`} />
          <div>
            <p className="text-xs text-gray-500">Risk</p>
            <p className={`font-semibold ${riskColors[card.impact.riskLevel]}`}>
              {card.impact.riskLevel}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Expected Impact:</h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <div>
              <p className="text-xs text-gray-500">Productivity</p>
              <p className="font-medium text-green-600">+{(card.impact.productivityBoost * 100).toFixed(0)}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Demand</p>
              <p className="font-medium text-blue-600">+{(card.impact.marketDemandBoost * 100).toFixed(0)}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingDown className="h-4 w-4 text-purple-500" />
            <div>
              <p className="text-xs text-gray-500">Costs</p>
              <p className="font-medium text-purple-600">-{(card.impact.costReduction * 100).toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
}