import { WorkoutRoutine } from '../types';

export const workoutRoutines: WorkoutRoutine[] = [
  {
    id: 'beginner-full-body',
    title: 'Beginner Full Body Workout',
    description: 'A complete full-body workout routine designed for beginners to build foundational strength and endurance.',
    imageUrl: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    level: 'beginner',
    duration: 30,
    targetMuscleGroups: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    caloriesBurn: 250,
    recommendedFor: {
      ageMin: 16,
      ageMax: 65,
    },
    steps: [
      {
        id: 1,
        title: 'Bodyweight Squats',
        description: 'Stand with feet shoulder-width apart. Lower your body as if sitting in a chair, keeping chest up and knees behind toes. Return to standing position.',
        imageUrl: 'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 60,
        repetitions: 15,
        sets: 3
      },
      {
        id: 2,
        title: 'Push-ups (Modified if needed)',
        description: 'Start in plank position with hands slightly wider than shoulders. Lower chest to floor and push back up. Modify by doing push-ups from knees if needed.',
        imageUrl: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 45,
        repetitions: 10,
        sets: 3
      },
      {
        id: 3,
        title: 'Walking Lunges',
        description: 'Step forward with right leg and lower body until both knees are bent at 90 degrees. Push through right heel to stand and repeat with left leg.',
        imageUrl: 'https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 60,
        repetitions: 10,
        sets: 2
      },
      {
        id: 4,
        title: 'Plank',
        description: 'Hold a plank position with forearms on the ground, body in a straight line from head to heels. Keep core engaged throughout.',
        imageUrl: 'https://images.pexels.com/photos/4162452/pexels-photo-4162452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 30,
        sets: 3
      }
    ]
  },
  {
    id: 'amateur-hiit',
    title: 'Intermediate HIIT Circuit',
    description: 'A high-intensity interval training workout designed to boost metabolism and build cardiovascular endurance.',
    imageUrl: 'https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    level: 'amateur',
    duration: 45,
    targetMuscleGroups: ['full-body', 'cardio'],
    caloriesBurn: 450,
    recommendedFor: {
      ageMin: 18,
      ageMax: 55,
      weightMin: 50,
    },
    steps: [
      {
        id: 1,
        title: 'Burpees',
        description: 'Start standing, drop to a squat, kick feet back to plank, perform a push-up, jump feet back to squat, then explosively jump up with arms overhead.',
        imageUrl: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 45,
        repetitions: 15,
        sets: 3
      },
      {
        id: 2,
        title: 'Mountain Climbers',
        description: 'Start in a plank position. Alternate bringing knees toward chest in a running motion, keeping core engaged and back flat.',
        imageUrl: 'https://images.pexels.com/photos/4162489/pexels-photo-4162489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 60,
        repetitions: 20,
        sets: 3
      },
      {
        id: 3,
        title: 'Kettlebell Swings',
        description: 'Hold kettlebell with both hands, hinge at hips with soft knees, swing kettlebell between legs, then thrust hips forward to swing kettlebell to chest height.',
        imageUrl: 'https://images.pexels.com/photos/4164755/pexels-photo-4164755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 45,
        repetitions: 15,
        sets: 3
      },
      {
        id: 4,
        title: 'Box Jumps',
        description: 'Stand facing a sturdy box. Bend knees and jump onto box, landing with soft knees. Step back down and repeat.',
        imageUrl: 'https://images.pexels.com/photos/4162506/pexels-photo-4162506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 45,
        repetitions: 12,
        sets: 3
      }
    ]
  },
  {
    id: 'expert-strength',
    title: 'Advanced Strength Training',
    description: 'A challenging strength training program designed for experienced fitness enthusiasts looking to maximize muscle growth and power.',
    imageUrl: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    level: 'expert',
    duration: 75,
    targetMuscleGroups: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    caloriesBurn: 600,
    recommendedFor: {
      ageMin: 20,
      ageMax: 50,
    },
    steps: [
      {
        id: 1,
        title: 'Barbell Bench Press',
        description: 'Lie on bench with feet flat on floor. Grip barbell slightly wider than shoulders. Lower bar to mid-chest, then press back up to starting position.',
        imageUrl: 'https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 60,
        repetitions: 8,
        sets: 4
      },
      {
        id: 2,
        title: 'Weighted Pull-ups',
        description: 'Attach weight to dip belt or hold dumbbell between feet. Grip bar with hands wider than shoulders. Pull body up until chin clears bar, then lower with control.',
        imageUrl: 'https://images.pexels.com/photos/4608151/pexels-photo-4608151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 60,
        repetitions: 8,
        sets: 4
      },
      {
        id: 3,
        title: 'Barbell Squats',
        description: 'Position barbell on upper back. Feet shoulder-width apart. Lower body until thighs are parallel to floor or lower, then drive through heels to stand.',
        imageUrl: 'https://images.pexels.com/photos/4164765/pexels-photo-4164765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 75,
        repetitions: 6,
        sets: 5
      },
      {
        id: 4,
        title: 'Deadlifts',
        description: 'Stand with feet hip-width apart, barbell over mid-foot. Hinge at hips to grip bar. Keep back flat, lift bar by extending hips and knees, then lower with control.',
        imageUrl: 'https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: 75,
        repetitions: 6,
        sets: 5
      }
    ]
  }
];