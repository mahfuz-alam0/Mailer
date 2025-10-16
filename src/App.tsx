import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
import RefundPolicy from './components/RefundPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  const [currentPage, setCurrentPage] = useState<'pricing' | 'refund' | 'terms'>('pricing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1">
        {currentPage === 'pricing' && <PricingPage onNavigate={setCurrentPage} />}
        {currentPage === 'refund' && <RefundPolicy onNavigate={setCurrentPage} />}
        {currentPage === 'terms' && <TermsAndConditions onNavigate={setCurrentPage} />}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
