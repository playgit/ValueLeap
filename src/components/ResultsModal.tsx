import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle, XCircle, Award, Target, Users } from 'lucide-react';

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: {
    previousEBITDA: number;
    newEBITDA: number;
    previousRevenue: number;
    newRevenue: number;
    riskFactor: number;
    feedback: string;
  };
}

export function ResultsModal({ isOpen, onClose, results }: ResultsModalProps) {
  if (!isOpen) return null;

  const ebitdaGrowth = ((results.newEBITDA - results.previousEBITDA) / results.previousEBITDA) * 100;
  const revenueGrowth = ((results.newRevenue - results.previousRevenue) / results.previousRevenue) * 100;
  
  const getPerformanceLevel = (growth: number) => {
    if (growth >= 20) return { text: 'Outstanding!', color: 'text-purple-600', icon: Award };
    if (growth >= 10) return { text: 'Great Job!', color: 'text-green-600', icon: Target };
    if (growth >= 0) return { text: 'Good Start', color: 'text-blue-600', icon: Users };
    return { text: 'Needs Work', color: 'text-red-600', icon: AlertTriangle };
  };

  const performanceLevel = getPerformanceLevel(ebitdaGrowth);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center mb-6">
          <performanceLevel.icon className={`h-12 w-12 mx-auto mb-2 ${performanceLevel.color}`} />
          <h2 className={`text-2xl font-bold ${performanceLevel.color} mb-1`}>
            {performanceLevel.text}
          </h2>
          <p className="text-gray-600">Strategy Execution Results</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl transform transition-all duration-500 hover:scale-105`}>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <h3 className="font-semibold text-blue-900">EBITDA Impact</h3>
            </div>
            <p className={`text-3xl font-bold ${ebitdaGrowth >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
              {ebitdaGrowth >= 0 ? '+' : ''}{ebitdaGrowth.toFixed(1)}%
            </p>
            <div className="mt-2 text-sm text-blue-800">
              <p>${results.previousEBITDA.toFixed(1)}M → ${results.newEBITDA.toFixed(1)}M</p>
            </div>
          </div>
          
          <div className={`bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl transform transition-all duration-500 hover:scale-105`}>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <h3 className="font-semibold text-green-900">Revenue Impact</h3>
            </div>
            <p className={`text-3xl font-bold ${revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {revenueGrowth >= 0 ? '+' : ''}{revenueGrowth.toFixed(1)}%
            </p>
            <div className="mt-2 text-sm text-green-800">
              <p>${results.previousRevenue.toFixed(1)}M → ${results.newRevenue.toFixed(1)}M</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            <h3 className="font-semibold text-gray-900">Strategic Analysis</h3>
          </div>
          <div className="flex items-center gap-3">
            {results.riskFactor >= 0.9 ? (
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
            )}
            <p className="text-gray-700">{results.feedback}</p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue to Next Round
          </button>
        </div>
      </div>
    </div>
  );
}