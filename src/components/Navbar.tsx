
import { Link, useLocation } from "react-router-dom";
import { Home, Users, MessageSquare, Info } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/professionals", label: "Professionals", icon: Users },
  { to: "/chat", label: "Chat", icon: MessageSquare },
  { to: "/about", label: "About", icon: Info },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-2xl text-mosaic-dark">
            Mosaic Mind
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`relative flex items-center space-x-1 text-sm font-medium ${
                  location.pathname === to
                    ? "text-mosaic-dark"
                    : "text-gray-600 hover:text-mosaic-dark"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-mosaic-dark"
                    animate
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-mosaic-dark hover:bg-mosaic-sage/20 rounded-full transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-mosaic-dark rounded-full hover:bg-opacity-90 transition-colors">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
