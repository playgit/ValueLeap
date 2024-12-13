import React from 'react';
import { Header } from './components/Header';
import { CompanySelection } from './components/CompanySelection';
import { StrategySelection } from './components/StrategySelection';
import { StrategySummary } from './components/StrategySummary';
import { SimulationControls } from './components/SimulationControls';
import { ResultsModal } from './components/ResultsModal';
import { useSimulation } from './hooks/useSimulation';

function App() {
  const {
    simulation,
    showResults,
    results,
    handleCompanySelect,
    handleStrategyCardSelect,
    handleExecuteStrategy,
    handleCloseResults,
    handleReset
  } = useSimulation();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <CompanySelection onSelect={handleCompanySelect} />

        {simulation.company && (
          <>
            <StrategySelection
              onSelect={handleStrategyCardSelect}
              selectedCards={simulation.selectedCards}
              currentEBITDA={simulation.currentEBITDA}
              currentRevenue={simulation.currentRevenue}
              marketCondition={simulation.marketCondition}
            />

            <StrategySummary
              company={simulation.company}
              selectedCards={simulation.selectedCards}
            />
          </>
        )}
      </main>

      <SimulationControls
        onExecute={handleExecuteStrategy}
        onReset={handleReset}
        canExecute={simulation.company !== null && simulation.selectedCards.length > 0}
        round={simulation.round}
      />

      <ResultsModal
        isOpen={showResults}
        onClose={handleCloseResults}
        results={results}
      />
    </div>
  );
}

export default App;