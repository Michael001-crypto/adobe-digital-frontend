import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">Adobe Digital</h2>
          <p className="text-gray-400">
            Empowering designers and digital creators with top-tier tools, resources, and community support.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/design-resources" className="hover:underline">Design Resources</Link></li>
            <li><Link to="/marketplace" className="hover:underline">Marketplace</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-indigo-400"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-indigo-400"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-indigo-400"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-indigo-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 pt-6 border-t border-gray-700 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Adobe Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
