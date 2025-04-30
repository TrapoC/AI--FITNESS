import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { UserMetrics } from '../types';

type UserMetricsFormProps = {
  onSubmit: (metrics: UserMetrics) => void;
};

const UserMetricsForm: React.FC<UserMetricsFormProps> = ({ onSubmit }) => {
  const [metrics, setMetrics] = useState<UserMetrics>({
    height: 170,
    weight: 70,
    age: 30,
    experienceLevel: 'beginner',
    fitnessGoal: 'general-fitness'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setMetrics(prev => ({
      ...prev,
      [name]: name === 'height' || name === 'weight' || name === 'age' 
        ? Number(value) 
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(metrics);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-6 text-center">Find Your Perfect Workout</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={metrics.height}
              onChange={handleChange}
              min="100"
              max="250"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={metrics.weight}
              onChange={handleChange}
              min="30"
              max="250"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={metrics.age}
              onChange={handleChange}
              min="16"
              max="99"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={metrics.experienceLevel}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Advanced</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="fitnessGoal" className="block text-sm font-medium text-gray-700 mb-1">
            Fitness Goal
          </label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={metrics.fitnessGoal}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="endurance">Endurance</option>
            <option value="flexibility">Flexibility</option>
            <option value="general-fitness">General Fitness</option>
          </select>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
          Find My Workout <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default UserMetricsForm;