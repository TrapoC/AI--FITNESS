import React from "react";
import { Check, X } from "lucide-react";

const MembershipPlans: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic access to workout routines",
      features: [
        { text: "Access to beginner workouts", included: true },
        { text: "Basic filtering options", included: true },
        { text: "Standard workout instructions", included: true },
        { text: "Personalized recommendations", included: false },
        { text: "Progress tracking", included: false },
        { text: "Custom workout creation", included: false },
      ],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "monthly",
      description: "Perfect for fitness enthusiasts",
      features: [
        { text: "Access to all workout levels", included: true },
        { text: "Advanced filtering & personalization", included: true },
        { text: "Detailed workout instructions", included: true },
        { text: "Personalized recommendations", included: true },
        { text: "Progress tracking", included: true },
        { text: "Custom workout creation", included: false },
      ],
      buttonText: "Start 7-Day Free Trial",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "monthly",
      description: "Complete fitness solution",
      features: [
        { text: "Access to all workout levels", included: true },
        { text: "Advanced filtering & personalization", included: true },
        { text: "Detailed workout instructions", included: true },
        { text: "Advanced AI recommendations", included: true },
        { text: "Comprehensive progress tracking", included: true },
        { text: "Custom workout creation", included: true },
      ],
      buttonText: "Start 7-Day Free Trial",
      highlighted: true, // Fixed: Set to true to highlight the "Pro" plan
    },
  ];

  return (
    <section id="membership" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Choose Your Fitness Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that matches your fitness goals and get personalized
            workout routines designed to help you achieve results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "shadow-xl border-2 border-blue-500 relative transform hover:-translate-y-2"
                  : "shadow-md border border-gray-200 hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-300 ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
