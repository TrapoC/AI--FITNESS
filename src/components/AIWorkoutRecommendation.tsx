import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Dumbbell, Clock, RotateCcw } from "lucide-react";
import { getWorkoutRecommendation } from "../services/openai";
import { UserMetrics } from "../types";

interface AIWorkoutRecommendationProps {
  userMetrics: UserMetrics;
}

interface Exercise {
  name: string;
  description: string;
  duration: number;
  sets: number;
  reps: number;
}

interface WorkoutPlan {
  workoutTitle: string;
  description: string;
  recommendedSets: number;
  recommendedReps: number;
  exercises: Exercise[];
}

const AIWorkoutRecommendation: React.FC<AIWorkoutRecommendationProps> = ({
  userMetrics,
}) => {
  const [loading, setLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);

  const generateWorkout = async () => {
    setLoading(true);
    try {
      const recommendation = await getWorkoutRecommendation(userMetrics);
      if (
        recommendation &&
        recommendation.workoutTitle &&
        recommendation.exercises &&
        Array.isArray(recommendation.exercises)
      ) {
        setWorkoutPlan(recommendation);
      } else {
        throw new Error("Invalid workout recommendation data");
      }
    } catch (error) {
      toast.error("Failed to generate workout recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">AI Workout Recommendation</h3>
        <button
          onClick={generateWorkout}
          disabled={loading}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <RotateCcw className="w-5 h-5 animate-spin mr-2" />
          ) : (
            <Dumbbell className="w-5 h-5 mr-2" />
          )}
          Generate Workout
        </button>
      </div>

      {workoutPlan && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h4 className="text-2xl font-bold mb-4">
            {workoutPlan.workoutTitle}
          </h4>
          <p className="text-gray-600 mb-6">{workoutPlan.description}</p>
          <div className="text-gray-600 mb-6">
            <p>
              <span className="font-medium">Recommended Sets:</span>{" "}
              {workoutPlan.recommendedSets}
            </p>
            <p>
              <span className="font-medium">Recommended Reps:</span>{" "}
              {workoutPlan.recommendedReps}
            </p>
          </div>
          <div className="space-y-6">
            {workoutPlan.exercises.map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h5 className="text-lg font-semibold mb-2">{exercise.name}</h5>
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{exercise.duration} seconds</span>
                  </div>
                  <div>
                    <span className="font-medium">{exercise.sets} sets</span>
                  </div>
                  <div>
                    <span className="font-medium">{exercise.reps} reps</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AIWorkoutRecommendation;