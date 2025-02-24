
import { useState } from "react";
import { Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const professionals = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Anxiety & Depression",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Relationship Counseling",
    rating: 4.8,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialization: "Child & Adolescent Therapy",
    rating: 4.8,
    reviews: 102,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 4,
    name: "Dr. Sofia Ramos",
    specialization: "Couples Counseling",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 5,
    name: "Dr. Lucas Steiner",
    specialization: "Trauma & PTSD",
    rating: 4.7,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 6,
    name: "Dr. Maria Thompson",
    specialization: "Stress Management",
    rating: 4.9,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=200&h=200",
  }
];

const Professionals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-mosaic-warm">
      <Navbar />
      <div className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="font-display text-4xl text-center mb-8">Our Mental Health Professionals</h1>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mosaic-dark"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {professionals
              .filter(
                (pro) =>
                  pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  pro.specialization.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((professional, index) => (
                <motion.div
                  key={professional.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{professional.name}</h3>
                      <p className="text-gray-600 text-sm">{professional.specialization}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-medium">{professional.rating}</span>
                    <span className="text-gray-600 text-sm ml-2">({professional.reviews} reviews)</span>
                  </div>

                  <button className="mt-4 w-full py-2 px-4 rounded-full bg-mosaic-dark text-white hover:bg-opacity-90 transition-colors">
                    Book Session
                  </button>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Professionals;
