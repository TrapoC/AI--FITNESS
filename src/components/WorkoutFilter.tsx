import React, { useState } from 'react';
import { Sliders, ChevronDown } from 'lucide-react';

type FilterProps = {
  onFilterChange: (filters: Record<string, any>) => void;
};

const WorkoutFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    level: '',
    duration: '',
    targetMuscle: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const muscleGroups = [
    'all',
    'chest', 
    'back', 
    'legs', 
    'shoulders', 
    'arms', 
    'core',
    'full-body', 
    'cardio'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Sliders className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">Filter Workouts</h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </div>

      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Experience Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.level}
              onChange={(e) => handleFilterChange('level', e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Advanced</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
            >
              <option value="">Any Duration</option>
              <option value="30">30 minutes or less</option>
              <option value="45">45 minutes or less</option>
              <option value="60">60 minutes or less</option>
              <option value="90">90 minutes or less</option>
            </select>
          </div>

          {/* Target Muscle Group Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Muscle Group</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.targetMuscle}
              onChange={(e) => handleFilterChange('targetMuscle', e.target.value)}
            >
              {muscleGroups.map((group) => (
                <option key={group} value={group === 'all' ? '' : group}>
                  {group.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutFilter;