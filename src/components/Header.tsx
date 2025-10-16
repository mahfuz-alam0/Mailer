import { Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: 'pricing' | 'refund' | 'terms') => void;
  currentPage: 'pricing' | 'refund' | 'terms';
}

function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('pricing')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">EmailService</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('pricing')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'pricing'
                  ? 'text-emerald-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'terms'
                  ? 'text-emerald-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('refund')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'refund'
                  ? 'text-emerald-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Refund Policy
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/30 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigate('pricing');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'pricing'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => {
                onNavigate('terms');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'terms'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => {
                onNavigate('refund');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'refund'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              Refund Policy
            </button>
            <div className="pt-3 border-t border-slate-700/50 space-y-2">
              <button className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
                Sign In
              </button>
              <button className="block w-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/30 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
