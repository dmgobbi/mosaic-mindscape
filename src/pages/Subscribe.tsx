
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for getting started",
    features: [
      "2 therapy sessions per month",
      "Access to AI chatbot",
      "Basic resources library",
      "Email support",
    ],
  },
  {
    name: "Premium",
    price: "99",
    description: "Most popular choice",
    features: [
      "4 therapy sessions per month",
      "Priority access to specialists",
      "Full resources library",
      "24/7 chat support",
      "Group therapy sessions",
    ],
  },
  {
    name: "Ultimate",
    price: "199",
    description: "Comprehensive care",
    features: [
      "8 therapy sessions per month",
      "Direct specialist access",
      "Custom care plan",
      "Family session access",
      "Priority support",
      "Wellness workshops",
    ],
  },
];

const Subscribe = () => {
  return (
    <div className="min-h-screen bg-mosaic-warm py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl mb-4">Choose Your Plan</h1>
          <p className="text-gray-600">Select the perfect plan for your mental health journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-full bg-mosaic-dark text-white hover:bg-opacity-90 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
