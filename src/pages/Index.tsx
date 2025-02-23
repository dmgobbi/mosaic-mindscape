
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Get matched with the right mental health professional for your needs.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy and security are our top priorities.",
  },
  {
    icon: Sparkles,
    title: "Instant Support",
    description: "Access our AI chatbot for immediate guidance and resources.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-mosaic-warm">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-blue/20 to-mosaic-sage/20" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-mosaic-dark mb-6">
              Mosaic Mind
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Accessible Mental Health Care for Everyone
            </p>
            <Link
              to="/subscribe"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-mosaic-dark rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-16">Why Choose Mosaic Mind?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-mosaic-dark" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mosaic-sage/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl mb-8">Ready to Start Your Journey?</h2>
          <Link
            to="/subscribe"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-mosaic-dark rounded-full hover:bg-opacity-90 transition-colors"
          >
            Explore Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
