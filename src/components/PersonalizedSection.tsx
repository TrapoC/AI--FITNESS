import React, { useState } from 'react';
import UserMetricsForm from './UserMetricsForm';
import AIWorkoutRecommendation from './AIWorkoutRecommendation';
import { UserMetrics } from '../types';

const PersonalizedSection: React.FC = () => {
  const [userMetrics, setUserMetrics] = useState<UserMetrics | null>(null);

  const handleMetricsSubmit = (metrics: UserMetrics) => {
    setUserMetrics(metrics);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Your AI-Powered Workout Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your metrics below and our advanced AI will create a personalized workout routine
            tailored specifically to your body type and fitness goals.
          </p>
        </div>
        
        <UserMetricsForm onSubmit={handleMetricsSubmit} />
        
        {userMetrics && (
          <AIWorkoutRecommendation userMetrics={userMetrics} />
        )}
      </div>
    </section>
  );
};

export default PersonalizedSection;