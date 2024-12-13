import React from 'react';
import { TrendingUp, Users, DollarSign, Briefcase } from 'lucide-react';
import type { Company } from '../types';

interface CompanyCardProps {
  company: Company;
  onClick: (company: Company) => void;
}

export function CompanyCard({ company, onClick }: CompanyCardProps) {
  return (
    <div
      onClick={() => onClick(company)}
      className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
          <p className="text-white/80 text-sm">{company.industry}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">EBITDA</p>
              <p className="font-semibold">${company.currentEBITDA}M</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Revenue</p>
              <p className="font-semibold">${company.revenue}M</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-purple-50 rounded-lg">
            <Users className="h-5 w-5 text-purple-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Employees</p>
              <p className="font-semibold">{company.employees.total}</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-orange-50 rounded-lg">
            <Briefcase className="h-5 w-5 text-orange-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Products</p>
              <p className="font-semibold">{company.products.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}