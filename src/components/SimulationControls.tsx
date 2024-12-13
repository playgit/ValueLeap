import React from 'react';
import { Play, RotateCcw, Clock } from 'lucide-react';

interface SimulationControlsProps {
  onExecute: () => void;
  onReset: () => void;
  canExecute: boolean;
  round: number;
}

export function SimulationControls({
  onExecute,
  onReset,
  canExecute,
  round
}: SimulationControlsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Current Round</p>
              <p className="text-xl font-bold text-gray-900">{round}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={onReset}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors duration-200"
            >
              <RotateCcw className="h-5 w-5" />
              Reset Simulation
            </button>
            
            <button
              onClick={onExecute}
              disabled={!canExecute}
              className={`
                px-6 py-2 rounded-lg flex items-center gap-2
                transform transition-all duration-200
                ${canExecute
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              <Play className="h-5 w-5" />
              Execute Strategy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}