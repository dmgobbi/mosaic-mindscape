
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Mosaic Mind</h3>
            <p className="text-gray-600 text-sm">
              Accessible Mental Health Care for Everyone
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-mosaic-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-gray-600 hover:text-mosaic-dark">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-gray-600 hover:text-mosaic-dark">
                  Plans & Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-mosaic-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-mosaic-dark">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-mosaic-dark">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-mosaic-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-mosaic-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-mosaic-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-mosaic-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Mosaic Mind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
