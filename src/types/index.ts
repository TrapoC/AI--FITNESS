export interface UserMetrics {
  height: number;
  weight: number;
  age: number;
  experienceLevel: 'beginner' | 'intermediate' | 'expert'; // Fixed 'amateur' to 'intermediate' for consistency
  fitnessGoal: 'weight-loss' | 'muscle-gain' | 'endurance' | 'flexibility' | 'general-fitness';
}

export interface WorkoutStep {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: number; // in seconds
  repetitions?: number;
  sets?: number;
}

export interface WorkoutRoutine {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  level: 'beginner' | 'intermediate' | 'expert'; // Fixed 'amateur' to 'intermediate' for consistency
  duration: number; // in minutes
  targetMuscleGroups: string[];
  caloriesBurn: number;
  steps: WorkoutStep[];
  recommendedFor: {
    ageMin?: number;
    ageMax?: number;
    weightMin?: number;
    weightMax?: number;
    heightMin?: number;
    heightMax?: number;
  };
}