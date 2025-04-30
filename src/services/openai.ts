import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getWorkoutRecommendation(userMetrics: {
  height: number;
  weight: number;
  age: number;
  experienceLevel: string;
  fitnessGoal: string;
}) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{
        role: "system",
        content: "You are a professional fitness trainer. Provide specific workout recommendations based on user metrics."
      }, {
        role: "user",
        content: `Create a workout plan for someone with these metrics:
          - Height: ${userMetrics.height}cm
          - Weight: ${userMetrics.weight}kg
          - Age: ${userMetrics.age}
          - Experience Level: ${userMetrics.experienceLevel}
          - Fitness Goal: ${userMetrics.fitnessGoal}
          
          Format the response as JSON with the following structure:
          {
            "workoutTitle": "string",
            "description": "string",
            "recommendedSets": number,
            "recommendedReps": number,
            "exercises": [
              {
                "name": "string",
                "description": "string",
                "duration": number,
                "sets": number,
                "reps": number
              }
            ]
          }`
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7 // Fixed invalid property
    });

    return JSON.parse(completion.choices[0].message.content); // Ensure proper parsing
  } catch (error) {
    console.error('Error getting workout recommendation:', error);
    throw error;
  }
}
