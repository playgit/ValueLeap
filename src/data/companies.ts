import type { Company } from '../types';
import { techFlowProducts, greenEnergyProducts, healthTechProducts } from './products';

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechFlow Solutions',
    description: 'Leading provider of enterprise software solutions',
    industry: 'Technology',
    currentEBITDA: 25,
    revenue: 100,
    employees: {
      total: 500,
      available: 450,
      salary: 120000
    },
    cash: 50,
    products: techFlowProducts,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    name: 'GreenEnergy Corp',
    description: 'Renewable energy solutions for sustainable future',
    industry: 'Energy',
    currentEBITDA: 15,
    revenue: 75,
    employees: {
      total: 300,
      available: 270,
      salary: 90000
    },
    cash: 30,
    products: greenEnergyProducts,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    name: 'HealthTech Innovations',
    description: 'Digital healthcare solutions and telemedicine platform',
    industry: 'Healthcare',
    currentEBITDA: 20,
    revenue: 85,
    employees: {
      total: 400,
      available: 360,
      salary: 100000
    },
    cash: 40,
    products: healthTechProducts,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];