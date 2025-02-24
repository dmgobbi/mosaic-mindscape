
import { ArrowRight, Heart, Shield, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Get matched with the right mental health professional for your unique needs.",
    gradient: "from-purple-500/10 to-blue-500/10"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy and security are our absolute top priorities.",
    gradient: "from-teal-500/10 to-emerald-500/10"
  },
  {
    icon: Users,
    title: "Expert Therapists",
    description: "Connect with licensed and experienced mental health professionals.",
    gradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    icon: Sparkles,
    title: "Instant Support",
    description: "Access immediate guidance through our supportive chat system.",
    gradient: "from-blue-500/10 to-teal-500/10"
  }
];

const mosaic = [
  { color: "bg-purple-500/20", size: "h-20 w-20", delay: 0 },
  { color: "bg-blue-500/20", size: "h-16 w-16", delay: 0.1 },
  { color: "bg-teal-500/20", size: "h-24 w-24", delay: 0.2 },
  { color: "bg-emerald-500/20", size: "h-12 w-12", delay: 0.3 },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-mosaic-warm to-white">
        {/* Animated Mosaic Background */}
        {mosaic.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-2xl ${shape.color} ${shape.size}`}
            initial={{ opacity: 0, scale: 0.5, x: -100, y: -100 }}
            animate={{ 
              opacity: 0.8, 
              scale: 1,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{
              duration: 2,
              delay: shape.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 15}%`,
              filter: "blur(40px)"
            }}
          />
        ))}

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-mosaic-dark mb-6 leading-tight">
              Your Path to Better Mental Health
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Accessible, Affordable & Personalized Therapy for Everyone
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/subscribe"
                className="group relative px-8 py-4 text-lg font-medium text-white overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-transform duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={false}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="relative">
                  Get Started
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </span>
              </Link>
              <Link
                to="/chat"
                className="px-8 py-4 text-lg font-medium text-gray-700 rounded-full bg-white/80 hover:bg-white/90 border border-gray-200 transition-colors"
              >
                Chat with a Therapist
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 79.875C1248 88.75 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mosaic Mind
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to making mental healthcare accessible, personal, and effective
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step towards a healthier mind today
            </p>
            <Link
              to="/subscribe"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Explore Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative mosaic patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
