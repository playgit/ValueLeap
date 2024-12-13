import React from 'react';
import { CompanyCard } from './CompanyCard';
import { companies } from '../data/companies';
import type { Company } from '../types';

interface CompanySelectionProps {
  onSelect: (company: Company) => void;
}

export function CompanySelection({ onSelect }: CompanySelectionProps) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Company</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map(company => (
          <CompanyCard
            key={company.id}
            company={company}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}