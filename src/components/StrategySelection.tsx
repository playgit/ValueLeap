import React from 'react';
import { StrategyCardComponent } from './StrategyCardComponent';
import { strategyCards } from '../data/strategyCards';
import type { StrategyCard, MarketCondition } from '../types';

interface StrategySelectionProps {
  onSelect: (card: StrategyCard) => void;
  selectedCards: StrategyCard[];
  currentEBITDA: number;
  currentRevenue: number;
  marketCondition: MarketCondition;
}

export function StrategySelection({
  onSelect,
  selectedCards,
  currentEBITDA,
  currentRevenue,
  marketCondition
}: StrategySelectionProps) {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Select Strategy Cards (Max 3)
        </h2>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-900">
            Current EBITDA: ${currentEBITDA.toFixed(1)}M
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Current Revenue: ${currentRevenue.toFixed(1)}M
          </p>
          <p className="text-sm text-gray-600">
            Market Condition: {marketCondition.name}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategyCards.map(card => (
          <StrategyCardComponent
            key={card.id}
            card={card}
            onClick={onSelect}
            selected={selectedCards.some(c => c.id === card.id)}
          />
        ))}
      </div>
    </div>
  );
}