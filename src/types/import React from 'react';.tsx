import React from "react";
import { Clock, Flame, Dumbbell } from "react-icons/all";

interface WorkoutCardProps {
  workout: {
    imageUrl: string;
    title: string;
    description: string;
    duration: number;
    caloriesBurn: number;
    steps: any[];
    level: string;
  };
  onClick: () => void;
}

const levelMap = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "beginner":
      return "bg-green-500 text-white";
    case "intermediate":
      return "bg-yellow-500 text-white";
    case "advanced":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={workout.imageUrl}
          alt={workout.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(
              workout.level
            )}`}
          >
            {levelMap[workout.level as keyof typeof levelMap]}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">
          {workout.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {workout.description}
        </p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-blue-500" />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center">
            <Flame className="w-4 h-4 mr-1 text-orange-500" />
            <span>{workout.caloriesBurn} cal</span>
          </div>
          <div className="flex items-center">
            <Dumbbell className="w-4 h-4 mr-1 text-purple-500" />
            <span>{workout.steps.length} exercises</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
