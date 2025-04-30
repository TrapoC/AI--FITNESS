import React from 'react';
import { Clock, Flame, Target, Award, Users } from 'lucide-react';
import { WorkoutRoutine } from '../types';

type WorkoutDetailProps = {
  workout: WorkoutRoutine;
};

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ workout }) => {
  // Map level to a more readable format
  const levelMap = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    expert: 'Advanced'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64 md:h-80">
        <img
          src={workout.imageUrl}
          alt={workout.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{workout.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
              {levelMap[workout.level as keyof typeof levelMap]}
            </span>
            <span className="bg-gray-800/80 text-white px-3 py-1 rounded-full">
              {workout.duration} minutes
            </span>
            <span className="bg-gray-800/80 text-white px-3 py-1 rounded-full">
              {workout.caloriesBurn} calories
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-8">{workout.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Duration</h3>
              <p className="text-lg font-semibold text-gray-900">{workout.duration} min</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-orange-50 rounded-lg">
            <Flame className="w-6 h-6 text-orange-500 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Calories</h3>
              <p className="text-lg font-semibold text-gray-900">{workout.caloriesBurn} kcal</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-purple-50 rounded-lg">
            <Target className="w-6 h-6 text-purple-600 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Targets</h3>
              <p className="text-lg font-semibold text-gray-900 capitalize">
                {workout.targetMuscleGroups.join(', ')}
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <Award className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-500">Level</h3>
              <p className="text-lg font-semibold text-gray-900">
                {levelMap[workout.level as keyof typeof levelMap]}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommended For</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4">
              {workout.recommendedFor.ageMin && workout.recommendedFor.ageMax && (
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    Age: {workout.recommendedFor.ageMin} - {workout.recommendedFor.ageMax} years
                  </span>
                </div>
              )}
              {workout.recommendedFor.weightMin && (
                <div className="flex items-center">
                  <span className="text-gray-700">
                    Min Weight: {workout.recommendedFor.weightMin} kg
                  </span>
                </div>
              )}
              {workout.recommendedFor.weightMax && (
                <div className="flex items-center">
                  <span className="text-gray-700">
                    Max Weight: {workout.recommendedFor.weightMax} kg
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Workout Steps</h2>
          <div className="space-y-8">
            {workout.steps.map((step, index) => (
              <div key={step.id} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="md:w-1/3">
                  <img 
                    src={step.imageUrl} 
                    alt={step.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {step.duration && (
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-blue-500" />
                        {step.duration} seconds
                      </span>
                    )}
                    {step.repetitions && (
                      <span>
                        {step.repetitions} repetitions
                      </span>
                    )}
                    {step.sets && (
                      <span>
                        {step.sets} sets
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;