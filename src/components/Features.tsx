import React from 'react';
import { Brain, Dumbbell, Target, Clock, BarChart, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: 'AI-Powered Routines',
      description: 'Our advanced AI analyzes thousands of workout combinations to create the most effective routines for your specific goals.'
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'Personalized For You',
      description: 'Custom workouts based on your age, body type, fitness level, and personal goals for maximum results.'
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-blue-600" />,
      title: 'All Fitness Levels',
      description: 'Whether you\'re just starting or a seasoned athlete, we have the perfect workouts to challenge you at the right level.'
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: 'Time-Efficient',
      description: 'Optimized routines that deliver maximum results in the time you have available, from quick 15-minute sessions to comprehensive programs.'
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      title: 'Progress Tracking',
      description: 'Monitor your improvements over time with detailed metrics and achievements to stay motivated.'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Community Support',
      description: 'Join thousands of users on the same fitness journey, share experiences, and motivate each other.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose FitAI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered fitness platform creates personalized workout routines that adapt to your needs,
            helping you achieve results faster than traditional workout programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-blue-50 inline-flex p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;