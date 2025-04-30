import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import WorkoutFilter from './WorkoutFilter';
import WorkoutDetail from './WorkoutDetail';
import { WorkoutRoutine } from '../types';
import { workoutRoutines } from '../data/workoutRoutines';

const WorkoutList: React.FC = () => {
  const [filteredWorkouts, setFilteredWorkouts] = useState<WorkoutRoutine[]>(workoutRoutines);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutRoutine | null>(null);
  const [filters, setFilters] = useState({
    level: '',
    duration: '',
    targetMuscle: ''
  });

  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  const applyFilters = (filterCriteria: Record<string, any>) => {
    let results = [...workoutRoutines];

    // Filter by level
    if (filterCriteria.level) {
      results = results.filter(workout => workout.level === filterCriteria.level);
    }

    // Filter by duration
    if (filterCriteria.duration) {
      const maxDuration = parseInt(filterCriteria.duration, 10);
      results = results.filter(workout => workout.duration <= maxDuration);
    }

    // Filter by target muscle group
    if (filterCriteria.targetMuscle) {
      results = results.filter(workout => 
        workout.targetMuscleGroups.includes(filterCriteria.targetMuscle)
      );
    }

    setFilteredWorkouts(results);
  };

  const handleFilterChange = (newFilters: Record<string, any>) => {
    setFilters(newFilters);
  };

  const handleWorkoutClick = (workout: WorkoutRoutine) => {
    setSelectedWorkout(workout);
    // Scroll to workout detail section
    document.getElementById('workout-detail')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="workouts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Workout</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our AI-curated collection of workout routines, tailored to your experience
            level, time constraints, and fitness goals.
          </p>
        </div>

        <WorkoutFilter onFilterChange={handleFilterChange} />

        {filteredWorkouts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map(workout => (
              <WorkoutCard 
                key={workout.id} 
                workout={workout} 
                onClick={() => handleWorkoutClick(workout)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No workouts match your filters</h3>
            <p className="text-gray-600">Try adjusting your filter criteria to see more workouts</p>
          </div>
        )}

        {selectedWorkout && (
          <div id="workout-detail" className="mt-16 pt-8 border-t border-gray-200">
            <WorkoutDetail workout={selectedWorkout} />
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutList;