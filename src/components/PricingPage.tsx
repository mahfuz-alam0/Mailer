import { useState } from 'react';
import { Check, Send, Inbox, Zap, X, Mail, Users, Shield, Clock, Sliders } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: 'pricing' | 'refund' | 'terms') => void;
}

function PricingPage({ onNavigate }: PricingPageProps) {
  const [payAsYouGoVolume, setPayAsYouGoVolume] = useState(5000);

  const calculatePayAsYouGoPrice = (volume: number) => {
    let perEmail = 0.0099;
    let per1000 = 0.50;

    if (volume >= 50000) {
      perEmail = 0.0085;
      per1000 = 0.43;
    } else if (volume >= 25000) {
      perEmail = 0.0089;
      per1000 = 0.45;
    } else if (volume >= 10000) {
      perEmail = 0.0095;
      per1000 = 0.48;
    }

    return {
      total: (volume * perEmail).toFixed(2),
      perEmail: perEmail.toFixed(4),
      per1000: per1000.toFixed(2)
    };
  };

  const sendingPlans = [
    { name: 'Starter', price: 9.99, emails: 1000, perEmail: 0.0099, per1000: 0.50 },
    { name: 'Growth', price: 24.99, emails: 5000, perEmail: 0.0099, per1000: 0.50, popular: true },
    { name: 'Business', price: 119.99, emails: 25000, perEmail: 0.0095, per1000: 0.48 },
    { name: 'Enterprise', price: 424.99, emails: 50000, perEmail: 0.0085, per1000: 0.43 },
  ];

  const emailAccountPlans = [
    {
      name: 'Basic Email',
      price: 0.99,
      storage: 1,
      extraStorage: 0.20,
      emailAccounts: 1,
      extraEmail: 0.50,
      canShareStorage: false,
      features: ['Send & Receive Emails', 'Webmail Access', 'Personal or Custom Domain', 'Spam Protection', 'Mobile App', 'Basic Support', '❌ Storage Sharing']
    },
    {
      name: 'Pro Email',
      price: 2.99,
      storage: 10,
      extraStorage: 0.15,
      emailAccounts: 5,
      extraEmail: 0.40,
      canShareStorage: true,
      features: ['Everything in Basic', 'IMAP/SMTP Access', 'Multiple Email Accounts', 'Custom Domain Support', 'Advanced Filters', 'Priority Support', '✅ Storage Sharing'],
      popular: true
    },
    {
      name: 'Business Email',
      price: 9.99,
      storage: 50,
      extraStorage: 0.10,
      emailAccounts: 25,
      extraEmail: 0.30,
      canShareStorage: true,
      features: ['Everything in Pro', 'Team Email Accounts', 'Advanced Security', '24/7 Priority Support', 'Team Collaboration', 'API Access', '✅ Storage Sharing']
    },
    {
      name: 'Professional Email',
      price: 19.99,
      storage: 100,
      extraStorage: 0.08,
      emailAccounts: 50,
      extraEmail: 0.25,
      canShareStorage: true,
      features: ['Everything in Business', 'Unlimited Custom Domains', 'Advanced Analytics', 'White-label Options', 'Dedicated Support', 'SLA Guarantee', '✅ Storage Sharing']
    },
  ];

  const comboPlans = [
    { name: 'Combo Starter', price: 10.99, emails: 1000, storage: 1, emailAccounts: 1, canShareStorage: false },
    { name: 'Combo Growth', price: 27.99, emails: 5000, storage: 10, emailAccounts: 5, canShareStorage: true, popular: true },
    { name: 'Combo Business', price: 129.99, emails: 25000, storage: 50, emailAccounts: 25, canShareStorage: true },
    { name: 'Combo Enterprise', price: 444.99, emails: 50000, storage: 100, emailAccounts: 50, canShareStorage: true },
  ];

  const pricing = calculatePayAsYouGoPrice(payAsYouGoVolume);

  return (
    <>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            Choose the perfect plan for your email needs. Monthly subscriptions with volume discounts. No hidden fees, cancel anytime.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <button onClick={() => onNavigate('refund')} className="text-blue-400 hover:text-blue-300 underline">
              Refund Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="text-blue-400 hover:text-blue-300 underline">
              Terms & Conditions
            </button>
          </div>
        </div>

        <div className="mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            <Sliders className="inline-block w-7 h-7 sm:w-8 sm:h-8 mr-3 text-emerald-400" />
            Pay As You Go - Custom Volume
          </h2>
          <p className="text-center text-slate-400 mb-8">Select your monthly email volume and get instant pricing. Lower rates for higher volumes.</p>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 lg:p-8">
            <div className="mb-6">
              <label className="block text-white font-semibold mb-4 text-center text-lg">
                Monthly Email Volume: <span className="text-emerald-400">{payAsYouGoVolume.toLocaleString()}</span> emails
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={payAsYouGoVolume}
                onChange={(e) => setPayAsYouGoVolume(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>1K</span>
                <span>25K</span>
                <span>50K</span>
                <span>100K</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
                <div className="text-slate-400 text-sm mb-2">Total Monthly Cost</div>
                <div className="text-4xl font-bold text-white mb-1">${pricing.total}</div>
                <div className="text-emerald-400 text-xs">per month</div>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-6 text-center">
                <div className="text-slate-400 text-sm mb-2">Per Email Cost</div>
                <div className="text-3xl font-bold text-white mb-1">${pricing.perEmail}</div>
                <div className="text-slate-400 text-xs">per email</div>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-6 text-center">
                <div className="text-slate-400 text-sm mb-2">Per 1000 Emails</div>
                <div className="text-3xl font-bold text-white mb-1">${pricing.per1000}</div>
                <div className="text-slate-400 text-xs">per 1K emails</div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-300 text-center">
                <Mail className="w-4 h-4 inline mr-2" />
                Volume discounts automatically applied! Higher volumes = lower per-email rates
              </p>
            </div>

            <button className="w-full py-4 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/30 transition-all duration-200">
              Start with Pay As You Go
            </button>
          </div>
        </div>

        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            <Send className="inline-block w-7 h-7 sm:w-8 sm:h-8 mr-3 text-emerald-400" />
            Monthly Sending Plans
          </h2>
          <p className="text-center text-slate-400 mb-3">Fixed monthly plans with included email volume. Perfect for consistent sending needs.</p>
          <p className="text-center text-emerald-400 text-sm sm:text-base font-medium mb-8">Starting at $0.0099 per email - Decreasing to $0.0085 for higher volumes</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {sendingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                  plan.popular ? 'border-emerald-500 shadow-emerald-500/20 shadow-xl' : 'border-slate-700'
                } rounded-2xl p-5 lg:p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    POPULAR
                  </div>
                )}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">${plan.price.toFixed(2)}</div>
                  <div className="text-emerald-400 text-sm font-medium mb-2">{plan.emails.toLocaleString()} emails/mo</div>
                  <div className="text-slate-400 text-xs sm:text-sm mb-4">
                    ${plan.per1000}/1K emails
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 mb-4 text-xs sm:text-sm text-slate-300 space-y-1 flex-1">
                    <div className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2 text-emerald-400" />
                      <span className="font-semibold">Per Email: ${plan.perEmail.toFixed(4)}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-2">
                      {plan.emails >= 50000 ? '🔥 Best Value' : plan.emails >= 25000 ? '✨ Great Savings' : plan.emails >= 10000 ? '💰 Volume Discount' : '🚀 Get Started'}
                    </div>
                  </div>
                  <button className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            <Inbox className="inline-block w-7 h-7 sm:w-8 sm:h-8 mr-3 text-blue-400" />
            Email Account Plans
          </h2>
          <p className="text-center text-slate-400 mb-8">Full-featured email accounts with send & receive capabilities. Use personal or custom domain emails.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {emailAccountPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                  plan.popular ? 'border-blue-500 shadow-blue-500/20 shadow-xl' : 'border-slate-700'
                } rounded-2xl p-5 lg:p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                <div className="flex-1">
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price.toFixed(2)}</span>
                      <span className="text-slate-400 ml-1 text-sm">/month</span>
                    </div>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-3 mb-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 flex items-center">
                        <Shield className="w-3 h-3 mr-1 text-blue-400" />
                        Storage
                      </span>
                      <span className="font-bold text-blue-400">{plan.storage} GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 flex items-center">
                        <Users className="w-3 h-3 mr-1 text-blue-400" />
                        Accounts
                      </span>
                      <span className="font-bold text-blue-400">{plan.emailAccounts}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-600 space-y-1">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Extra Storage</span>
                        <span className="font-semibold text-blue-400">${plan.extraStorage}/GB</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Extra Account</span>
                        <span className="font-semibold text-blue-400">${plan.extraEmail}/mo</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4 text-xs">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-slate-300">
                        <Check className="w-3 h-3 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {!plan.canShareStorage && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 mb-3">
                      <p className="text-xs text-amber-300 text-center">
                        Storage cannot be shared
                      </p>
                    </div>
                  )}
                </div>

                <button className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            <Zap className="inline-block w-7 h-7 sm:w-8 sm:h-8 mr-3 text-amber-400" />
            Combo Plans - Best Value
          </h2>
          <p className="text-center text-slate-400 mb-8">Complete email solution: Sending + Email Accounts combined with monthly renewals.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {comboPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                  plan.popular ? 'border-amber-500 shadow-amber-500/20 shadow-xl' : 'border-slate-700'
                } rounded-2xl p-5 lg:p-6 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}
                <div className="flex-1">
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price.toFixed(2)}</span>
                      <span className="text-slate-400 ml-1 text-sm">/month</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-3 mb-4 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Sending</span>
                      <span className="font-bold text-amber-400">{plan.emails.toLocaleString()}/mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Storage</span>
                      <span className="font-bold text-amber-400">{plan.storage} GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Accounts</span>
                      <span className="font-bold text-amber-400">{plan.emailAccounts}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4 text-xs">
                    <li className="flex items-center text-slate-300">
                      <Check className="w-3 h-3 mr-2 text-amber-400 flex-shrink-0" />
                      <span>Full Sending Access</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-3 h-3 mr-2 text-amber-400 flex-shrink-0" />
                      <span>Complete Inbox</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-3 h-3 mr-2 text-amber-400 flex-shrink-0" />
                      <span>IMAP/SMTP Access</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-3 h-3 mr-2 text-amber-400 flex-shrink-0" />
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-3 h-3 mr-2 text-amber-400 flex-shrink-0" />
                      <span>Custom Domains</span>
                    </li>
                    {plan.canShareStorage ? (
                      <li className="flex items-center text-slate-300">
                        <Check className="w-3 h-3 mr-2 text-amber-400 flex-shrink-0" />
                        <span>Storage Sharing</span>
                      </li>
                    ) : (
                      <li className="flex items-center text-slate-400">
                        <X className="w-3 h-3 mr-2 text-slate-600 flex-shrink-0" />
                        <span>Storage Sharing</span>
                      </li>
                    )}
                  </ul>
                </div>

                <button className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Combo Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Compare All Plans
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-white">Feature</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-emerald-400">Pay As You Go</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-emerald-400">Monthly Sending</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-blue-400">Email Accounts</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-amber-400">Combo Plans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Starting Price</td>
                    <td className="px-4 py-4 text-center text-sm text-white">Custom</td>
                    <td className="px-4 py-4 text-center text-sm text-white">$9.99/mo</td>
                    <td className="px-4 py-4 text-center text-sm text-white">$0.99/mo</td>
                    <td className="px-4 py-4 text-center text-sm text-white">$10.99/mo</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Bulk Email Sending (API)</td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-amber-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Regular Email Send/Receive</td>
                    <td className="px-4 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-blue-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-amber-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Per Email Cost</td>
                    <td className="px-4 py-4 text-center text-sm text-white">$0.0099-$0.0085</td>
                    <td className="px-4 py-4 text-center text-sm text-white">$0.0099-$0.0085</td>
                    <td className="px-4 py-4 text-center text-sm text-slate-400">N/A</td>
                    <td className="px-4 py-4 text-center text-sm text-white">Included</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Storage Sharing</td>
                    <td className="px-4 py-4 text-center text-sm text-slate-400">-</td>
                    <td className="px-4 py-4 text-center text-sm text-slate-400">-</td>
                    <td className="px-4 py-4 text-center text-sm text-white">Pro+ Only</td>
                    <td className="px-4 py-4 text-center text-sm text-white">Growth+ Only</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Volume Discounts</td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-amber-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">Custom Domains</td>
                    <td className="px-4 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-blue-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-amber-400 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-300 font-medium">API Access</td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="px-4 py-4 text-center text-sm text-white">Business+</td>
                    <td className="px-4 py-4 text-center"><Check className="w-5 h-5 text-amber-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Important Notes</h3>
            <div className="text-slate-300 text-sm sm:text-base space-y-3 text-left">
              <p>• <strong>Volume Discounts:</strong> Automatically applied based on your monthly email volume</p>
              <p>• <strong>Storage Sharing:</strong> Only available on Pro Email plans and higher</p>
              <p>• <strong>Token Usage:</strong> Sending plans charge based on email size (see Terms & Conditions for details)</p>
              <p>• <strong>Instant Delivery:</strong> Available for +2 tokens per email (see Terms & Conditions)</p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-slate-400 text-xs sm:text-sm">
                All plans include a 14-day money-back guarantee. Refunds processed every Monday. See our <button onClick={() => onNavigate('refund')} className="text-blue-400 hover:text-blue-300 underline">Refund Policy</button> for details.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(to right, #10b981, #14b8a6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(to right, #10b981, #14b8a6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </>
  );
}

export default PricingPage;
