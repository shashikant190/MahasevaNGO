import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold">Mahaseva Sahayog Foundation</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Empowering communities through education, healthcare, and sustainable development initiatives.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="hover:text-primary transition-colors">
                  Our Campaigns
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-primary transition-colors">
                  Awards & Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/campaigns" className="hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-primary transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/csr" className="hover:text-primary transition-colors">
                  Corporate Partnership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Phaltan, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 91722 93187</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>advprashantnimbalkar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Mahaseva Sahayog Foundation. All rights reserved. | 80G Registration Available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
