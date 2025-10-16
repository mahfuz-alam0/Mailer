import { Calendar, CreditCard, AlertCircle } from 'lucide-react';

interface RefundPolicyProps {
  onNavigate: (page: 'pricing' | 'refund' | 'terms') => void;
}

function RefundPolicy({ onNavigate }: RefundPolicyProps) {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-5xl mx-auto">

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 lg:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Refund Policy</h1>
        <p className="text-slate-400 mb-8">Last Updated: October 16, 2025</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-400" />
              Money-Back Guarantee
            </h2>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-4">
              <p className="font-semibold text-blue-300 mb-2">14-Day Money-Back Guarantee</p>
              <p>All subscription plans include a comprehensive fourteen (14) day money-back guarantee period commencing from the initial date of subscription activation. During this period, subscribers may request a full refund of their subscription fees for any reason whatsoever, without requirement to provide justification or explanation.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-3 text-emerald-400" />
              Refund Processing Schedule
            </h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Weekly Processing Cycle</h3>
                <p className="mb-3">Refund requests are processed according to a predetermined weekly schedule to ensure systematic and efficient handling of all refund applications. All approved refund requests shall be processed exclusively on <strong className="text-emerald-400">Mondays of each calendar week</strong>.</p>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-3">
                  <p className="text-amber-300 font-semibold mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Important Timeline Information
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Refund requests submitted between <strong>Monday 00:00 UTC</strong> and <strong>Sunday 23:59 UTC</strong> shall be processed on the <strong>subsequent Monday</strong></li>
                    <li>• Processing occurs at approximately <strong>09:00 UTC</strong> on the designated Monday</li>
                    <li>• Funds are typically returned to the original payment method within <strong>5-10 business days</strong> following processing</li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">Example Processing Timeline:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Request submitted: Wednesday, October 16, 2025 at 14:30 UTC</li>
                    <li>• Processing date: Monday, October 21, 2025 at 09:00 UTC</li>
                    <li>• Expected receipt of funds: October 26-31, 2025 (depending on financial institution)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Refund Request Procedure</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Initiate Refund Request</p>
                    <p>Submit a formal refund request through your account dashboard or by contacting our customer support team via email at <span className="text-blue-400">refunds@emailservice.com</span></p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Confirmation Receipt</p>
                    <p>You shall receive an automated confirmation email acknowledging receipt of your refund request within twenty-four (24) hours of submission</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Eligibility Verification</p>
                    <p>Our refund processing team shall verify the eligibility of your request by confirming that it falls within the fourteen (14) day money-back guarantee period and that all terms and conditions are satisfied</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Processing on Designated Monday</p>
                    <p>Approved refunds shall be processed on the next scheduled Monday processing cycle as detailed in the aforementioned processing schedule</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Refund Completion Notification</p>
                    <p>Upon successful processing, you shall receive a confirmation email containing transaction details and estimated timeframe for funds to appear in your account</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Circumstances</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="mb-4">The following circumstances shall render a subscription or transaction ineligible for refund processing:</p>
              <ul className="space-y-2">
                <li>• Refund requests submitted after the expiration of the fourteen (14) day money-back guarantee period</li>
                <li>• Subscriptions that have been previously refunded and subsequently reactivated</li>
                <li>• Accounts found to be in violation of our Terms and Conditions or Acceptable Use Policy</li>
                <li>• Charges for additional services purchased beyond the base subscription fee, including but not limited to: extra storage allocations, additional email accounts, or overage fees</li>
                <li>• Pay-as-you-go email tokens that have been partially or fully utilized prior to refund request submission</li>
                <li>• Promotional or discounted subscriptions explicitly marked as non-refundable at the time of purchase</li>
                <li>• Services provided through third-party resellers or distribution partners (refund policies of said partners shall apply)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Partial Refunds</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <p className="mb-4">In certain circumstances, partial refunds may be issued at the sole discretion of our refund processing team:</p>
              <ul className="space-y-2">
                <li>• <strong>Pro-rated Refunds:</strong> For annual subscriptions cancelled after the fourteen (14) day guarantee period, pro-rated refunds may be considered on a case-by-case basis for the unused portion of the subscription term</li>
                <li>• <strong>Service Interruptions:</strong> In the event of extended service outages or disruptions attributable to our infrastructure, partial refunds or service credits may be issued proportional to the duration of the interruption</li>
                <li>• <strong>Downgrade Scenarios:</strong> When downgrading from a higher-tier plan to a lower-tier plan mid-billing cycle, a pro-rated credit may be applied to your account</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Method Considerations</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 space-y-3">
              <p><strong className="text-white">Credit/Debit Cards:</strong> Refunds shall be credited to the original card used for the transaction. Please allow five (5) to ten (10) business days for the refund to appear on your statement, subject to your financial institution's processing timeframes.</p>
              <p><strong className="text-white">PayPal:</strong> Refunds shall be returned to your PayPal account balance within three (3) to five (5) business days following processing.</p>
              <p><strong className="text-white">Bank Transfers:</strong> For direct bank transfer payments, refunds shall be processed to the originating bank account within seven (7) to fourteen (14) business days, subject to international banking regulations and intermediary bank processing times.</p>
              <p><strong className="text-white">Cryptocurrency:</strong> Due to the irreversible nature of cryptocurrency transactions and significant market volatility, refunds for cryptocurrency payments shall be issued in USD equivalent at the exchange rate prevailing on the date of the original transaction, converted to your preferred standard payment method.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <p className="mb-4">For inquiries, clarifications, or assistance regarding refunds, please contact our dedicated refund support team:</p>
              <ul className="space-y-2">
                <li><strong className="text-white">Email:</strong> <span className="text-blue-400">refunds@emailservice.com</span></li>
                <li><strong className="text-white">Support Hours:</strong> Monday - Friday, 09:00 - 17:00 UTC</li>
                <li><strong className="text-white">Response Time:</strong> Within 24-48 hours for all refund-related inquiries</li>
              </ul>
            </div>
          </section>

          <section className="pt-6 border-t border-slate-700">
            <p className="text-sm text-slate-400 italic">
              This Refund Policy is subject to modification at any time without prior notice. Continued use of our services following any changes constitutes acceptance of the revised policy. It is the responsibility of the subscriber to review this policy periodically for updates and amendments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
