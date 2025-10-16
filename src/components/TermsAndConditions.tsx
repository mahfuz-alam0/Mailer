import { ArrowLeft, Mail, Zap, Database, Shield, AlertTriangle, Clock } from 'lucide-react';

interface TermsAndConditionsProps {
  onNavigate: (page: 'pricing' | 'refund' | 'terms') => void;
}

function TermsAndConditions({ onNavigate }: TermsAndConditionsProps) {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-5xl mx-auto">
      <button
        onClick={() => onNavigate('pricing')}
        className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Pricing
      </button>

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 lg:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
        <p className="text-slate-400 mb-8">Last Updated: October 16, 2025</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <p>By accessing, registering for, or utilizing any services provided by our email platform (hereinafter referred to as "the Service"), you hereby acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions in their entirety, as well as all applicable laws, regulations, and ordinances. If you do not agree with any provision contained herein, you are expressly prohibited from using or accessing this Service and must discontinue use immediately.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-emerald-400" />
              Token-Based Email Sending System
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-3 text-lg">Token Calculation Methodology</h3>
                <p className="mb-4">Our email sending infrastructure operates on a token-based consumption model wherein the quantity of tokens consumed per email transmission is determined by the total size of the email message, inclusive of all attachments, embedded media, HTML formatting, and associated metadata. The token consumption calculation adheres to the following graduated scale:</p>

                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2 text-white">Email Size Range</th>
                        <th className="text-center py-2 text-white">Tokens Required</th>
                        <th className="text-right py-2 text-white">Cost per Email</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      <tr>
                        <td className="py-2">0 KB - 50 KB</td>
                        <td className="text-center">1 token</td>
                        <td className="text-right text-emerald-400">$0.0005</td>
                      </tr>
                      <tr>
                        <td className="py-2">50.01 KB - 100 KB</td>
                        <td className="text-center">2 tokens</td>
                        <td className="text-right text-emerald-400">$0.0010</td>
                      </tr>
                      <tr>
                        <td className="py-2">100.01 KB - 150 KB</td>
                        <td className="text-center">3 tokens</td>
                        <td className="text-right text-emerald-400">$0.0015</td>
                      </tr>
                      <tr>
                        <td className="py-2">150.01 KB - 200 KB</td>
                        <td className="text-center">4 tokens</td>
                        <td className="text-right text-emerald-400">$0.0020</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">Each additional 50 KB</td>
                        <td className="text-center font-semibold">+1 token</td>
                        <td className="text-right text-emerald-400 font-semibold">+$0.0005</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-amber-300 font-semibold mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Important Calculation Notes
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Base token consumption initiates at one (1) token for emails measuring fifty (50) kilobytes or less</li>
                    <li>• Each increment of fifty (50) kilobytes or fraction thereof beyond the initial fifty (50) kilobytes requires one (1) additional token</li>
                    <li>• Email size calculation encompasses the complete message payload including but not limited to: body content, HTML markup, inline images, file attachments, headers, and metadata</li>
                    <li>• Token deduction occurs immediately upon successful email transmission initiation and is non-refundable regardless of delivery status</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 text-lg">Illustrative Examples</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-white font-semibold mb-1">Example 1: Plain Text Email</p>
                    <p className="text-slate-400 mb-2">Email size: 25 KB (text only, no attachments)</p>
                    <p className="text-emerald-400">Token consumption: 1 token = $0.0005</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-white font-semibold mb-1">Example 2: HTML Email with Images</p>
                    <p className="text-slate-400 mb-2">Email size: 85 KB (HTML content + embedded images)</p>
                    <p className="text-emerald-400">Token consumption: 2 tokens = $0.0010</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-white font-semibold mb-1">Example 3: Email with Attachments</p>
                    <p className="text-slate-400 mb-2">Email size: 275 KB (HTML + PDF attachment)</p>
                    <p className="text-emerald-400">Token consumption: 6 tokens = $0.0030</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-amber-400" />
              Email Delivery Modes and Processing
            </h2>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-3 text-lg">Standard Delivery Mode (Default)</h3>
                <div className="bg-slate-800 rounded-lg p-4 mb-3">
                  <p className="mb-3">The standard delivery mode constitutes our default email transmission methodology and operates according to the following technical specifications and operational parameters:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Database className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span><strong className="text-white">Queuing Mechanism:</strong> Upon receipt of an email transmission request via API or web interface, the email data payload is temporarily stored in our secure database infrastructure for processing</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span><strong className="text-white">Batch Processing:</strong> Our server infrastructure processes email transmissions in discrete chunks or batches to optimize system resources, maintain server stability, and ensure equitable distribution of sending capacity across all users</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span><strong className="text-white">Delivery Timeframe:</strong> Email delivery under standard mode typically occurs within fifteen (15) minutes to two (2) hours from the time of request submission, subject to current queue volume and system load</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span><strong className="text-white">Token Consumption:</strong> Standard delivery mode utilizes only the base token calculation as detailed in the Token-Based Email Sending System section above</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 text-lg">Instant Delivery Mode (Premium)</h3>
                <div className="bg-slate-800 rounded-lg p-4 mb-3">
                  <p className="mb-3">For time-sensitive communications requiring immediate transmission, subscribers may elect to utilize our instant delivery mode, which operates according to the following specifications:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span><strong className="text-white">Priority Processing:</strong> Emails flagged for instant delivery bypass the standard queuing system and receive immediate processing priority</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span><strong className="text-white">Delivery Timeframe:</strong> Instant delivery mode targets email transmission within thirty (30) seconds to three (3) minutes from request submission, subject to recipient mail server availability</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="w-4 h-4 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span><strong className="text-white">Additional Token Surcharge:</strong> Instant delivery mode requires an additional two (2) tokens per email transmission, regardless of email size. This surcharge is applied in addition to the base token consumption calculated according to email size</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-amber-300 font-semibold mb-3">Instant Delivery Cost Examples:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>25 KB email (Standard: 1 token):</span>
                      <span className="text-white font-semibold">3 tokens total = $0.0015</span>
                    </div>
                    <div className="flex justify-between">
                      <span>85 KB email (Standard: 2 tokens):</span>
                      <span className="text-white font-semibold">4 tokens total = $0.0020</span>
                    </div>
                    <div className="flex justify-between">
                      <span>275 KB email (Standard: 6 tokens):</span>
                      <span className="text-white font-semibold">8 tokens total = $0.0040</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Database className="w-6 h-6 mr-3 text-blue-400" />
              Storage Allocation and Sharing Policies
            </h2>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-3 text-lg">Basic Email Plan Storage Restrictions</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-3">
                  <p className="text-red-300 font-semibold mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Storage Sharing Limitation
                  </p>
                  <p className="text-sm mb-2">Subscribers enrolled in the Basic Email plan tier are explicitly prohibited from distributing, allocating, or sharing their designated storage quota across multiple email accounts. The storage allocation provided under the Basic Email plan is exclusively reserved for utilization by the single email account associated with the subscription.</p>
                  <p className="text-sm">Each email account created under a Basic Email subscription maintains an isolated and independent storage allocation. No pooling, redistribution, or reallocation of storage capacity between accounts shall be permitted or technically facilitated.</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3 text-lg">Pro and Higher Tier Plans - Storage Sharing Capabilities</h3>
                <div className="bg-slate-800 rounded-lg p-4 mb-3">
                  <p className="mb-3">Subscribers enrolled in Pro Email, Business Email, Professional Email, or any Combo plan tier at the Growth level or above are granted comprehensive storage sharing capabilities, enabling flexible allocation strategies:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong className="text-white">Pooled Storage Model:</strong> All email accounts within the subscription may draw from a unified, centralized storage pool, allowing dynamic allocation based on individual account requirements</li>
                    <li>• <strong className="text-white">Individual Allocation Model:</strong> Storage may be partitioned and assigned in predetermined quantities to specific email accounts, ensuring guaranteed availability for critical accounts</li>
                    <li>• <strong className="text-white">Hybrid Allocation Model:</strong> Subscribers may implement a combination approach, designating fixed allocations for certain accounts while maintaining a shared pool for others</li>
                    <li>• <strong className="text-white">Reallocation Flexibility:</strong> Storage allocations may be modified, adjusted, or redistributed at any time through the account management dashboard without service interruption</li>
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 font-semibold mb-2">Storage Sharing Example Scenario:</p>
                  <p className="text-sm">Pro Email Plan with 10 GB storage and 5 email accounts:</p>
                  <ul className="text-sm space-y-1 mt-2 ml-4">
                    <li>• Account A: 3 GB (fixed allocation)</li>
                    <li>• Account B: 2 GB (fixed allocation)</li>
                    <li>• Accounts C, D, E: Share remaining 5 GB (pooled allocation)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Service Level Agreements and Limitations</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 space-y-3">
              <div>
                <h3 className="font-semibold text-white mb-2">Email Delivery Guarantees</h3>
                <p className="text-sm">While we maintain industry-leading infrastructure and employ best practices for email deliverability, we cannot guarantee absolute delivery to recipient inboxes due to factors beyond our control including but not limited to: recipient server configuration, spam filtering policies, domain reputation, recipient mailbox capacity, and network connectivity issues. We guarantee delivery attempts but not delivery success.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Service Availability</h3>
                <p className="text-sm">We strive to maintain 99.9% uptime availability for all services; however, scheduled maintenance windows, emergency maintenance procedures, force majeure events, and circumstances beyond our reasonable control may result in temporary service interruptions. Advance notice shall be provided for all scheduled maintenance activities whenever operationally feasible.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Data Retention and Backup</h3>
                <p className="text-sm">Email data stored within our infrastructure is subject to automated backup procedures executed at regular intervals. However, subscribers retain ultimate responsibility for maintaining independent backups of critical data. We recommend regular exportation of important emails and attachments to external storage systems to prevent data loss scenarios.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use Policy</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="mb-4">Subscribers are expressly prohibited from utilizing our Service for any of the following purposes or activities:</p>
              <ul className="space-y-2 text-sm">
                <li>• Transmission of unsolicited commercial email (spam) or bulk email communications to non-consenting recipients</li>
                <li>• Distribution of malicious software, viruses, malware, or any code intended to damage, interfere with, or compromise computer systems</li>
                <li>• Phishing attempts, identity theft, or fraudulent impersonation of individuals or organizations</li>
                <li>• Harassment, threats, or abusive communications directed at any individual or entity</li>
                <li>• Distribution of content that violates intellectual property rights, copyright protections, or trademark regulations</li>
                <li>• Transmission of content that is illegal, obscene, defamatory, or violates applicable laws or regulations</li>
                <li>• Attempts to circumvent, disable, or interfere with security features or system limitations</li>
                <li>• Automated scripts or bots designed to abuse, overload, or disrupt our infrastructure</li>
              </ul>
              <p className="mt-4 text-sm font-semibold">Violation of this Acceptable Use Policy may result in immediate account suspension or termination without refund, and may be reported to appropriate legal authorities.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Billing and Payment Terms</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 space-y-3">
              <p><strong className="text-white">Recurring Billing:</strong> Subscription plans are billed on a recurring monthly or annual basis, as selected during subscription activation. Automatic renewal occurs at the end of each billing cycle unless cancelled prior to the renewal date.</p>
              <p><strong className="text-white">Payment Authorization:</strong> By subscribing to our Service, you authorize us to charge your designated payment method for all applicable fees, including but not limited to subscription charges, overage fees, and additional service charges.</p>
              <p><strong className="text-white">Failed Payments:</strong> In the event of payment failure or declined transactions, we shall make reasonable attempts to collect payment using the provided payment information. Continued payment failure may result in service suspension or account termination.</p>
              <p><strong className="text-white">Price Modifications:</strong> We reserve the right to modify pricing structures, subscription fees, or service charges at any time. Existing subscribers shall receive thirty (30) days advance written notice of any price increases affecting their current subscription.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Account Termination and Cancellation</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 space-y-3">
              <p><strong className="text-white">Voluntary Cancellation:</strong> Subscribers may cancel their subscription at any time through the account management dashboard or by contacting customer support. Cancellation becomes effective at the end of the current billing cycle, and no further charges shall be assessed.</p>
              <p><strong className="text-white">Immediate Termination by Company:</strong> We reserve the unconditional right to immediately suspend or terminate any account, without advance notice or refund obligation, in cases of: violation of these Terms and Conditions, engagement in illegal activities, abuse of system resources, or any conduct deemed detrimental to our Service or other users.</p>
              <p><strong className="text-white">Data Access Post-Termination:</strong> Following account termination or cancellation, subscribers shall have thirty (30) days to export and retrieve their data before permanent deletion from our systems. After this grace period, all account data shall be permanently and irretrievably deleted in accordance with our data retention policies.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <p className="mb-3">To the maximum extent permitted by applicable law, our aggregate liability for any claims, damages, losses, or expenses arising from or related to your use of the Service shall not exceed the total amount paid by you to us during the twelve (12) month period immediately preceding the event giving rise to the liability claim.</p>
              <p className="mb-3">Under no circumstances shall we be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, including but not limited to: loss of profits, loss of revenue, loss of business opportunities, loss of data, business interruption, or reputational harm, regardless of whether we were advised of the possibility of such damages.</p>
              <p className="text-sm italic">Some jurisdictions do not permit limitation or exclusion of certain liabilities. In such jurisdictions, our liability shall be limited to the maximum extent permitted by applicable law.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <p className="mb-3">We reserve the right to modify, amend, update, or replace any provision of these Terms and Conditions at any time without prior notice. Material modifications affecting subscriber rights or obligations shall be communicated via email to the address associated with your account.</p>
              <p className="mb-3">Continued use of the Service following the publication of modified Terms and Conditions constitutes acknowledgment and acceptance of the updated terms. It is your responsibility to periodically review these Terms and Conditions for changes.</p>
              <p className="text-sm">The "Last Updated" date at the top of this document reflects the most recent revision date.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <p className="mb-3">For questions, clarifications, or concerns regarding these Terms and Conditions, please contact our legal department:</p>
              <ul className="space-y-2">
                <li><strong className="text-white">Email:</strong> <span className="text-blue-400">legal@emailservice.com</span></li>
                <li><strong className="text-white">Postal Address:</strong> Legal Department, Email Service Inc., 123 Technology Boulevard, Suite 500, San Francisco, CA 94105, United States</li>
                <li><strong className="text-white">Business Hours:</strong> Monday - Friday, 09:00 - 17:00 Pacific Time</li>
              </ul>
            </div>
          </section>

          <section className="pt-6 border-t border-slate-700">
            <p className="text-sm text-slate-400 italic">
              By using this Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety. If you do not agree with any provision herein, you must immediately discontinue use of the Service.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => onNavigate('pricing')}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Return to Pricing Page
        </button>
        <span className="text-slate-600 mx-3">|</span>
        <button
          onClick={() => onNavigate('refund')}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          View Refund Policy
        </button>
      </div>
    </div>
  );
}

export default TermsAndConditions;
