import { Mail, Facebook, Twitter, Linkedin, Github, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'pricing' | 'refund' | 'terms') => void;
}

function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">EmailService</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Professional email solutions for businesses of all sizes. Fast, reliable, and affordable.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="Github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Pricing Plans
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Email Sending API
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Email Accounts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Combo Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Status Page
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('refund')}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Acceptable Use Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} EmailService. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
