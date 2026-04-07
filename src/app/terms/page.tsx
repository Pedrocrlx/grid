import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Grid Terms of Service - Legal terms and conditions for using Grid barbershop booking platform.",
};

export default function TermsPage() {
  return (
    <div className="bg-white text-slate-700">
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-600">
              Last updated: March 5, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-slate-600 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using Grid (the "Platform"), you accept and agree to be bound by the terms and provision of this agreement. Grid is provided by Grid and its successors and assigns. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="mt-4">
                These Terms of Service apply to all users of the Platform, including users who are contributors of content, information, and other materials or services on the Platform.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Grid's Platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the Platform</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Using automated tools (bots, scrapers) to access or extract data from the Platform</li>
              </ul>
              <p className="mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Grid at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Disclaimer
              </h2>
              <p>
                The materials on Grid's Platform are provided on an 'as is' basis. Grid makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-4">
                Further, Grid does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Platform or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Limitations
              </h2>
              <p>
                In no event shall Grid or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Grid's Platform, even if Grid or a Grid authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="mt-4">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on Grid's Platform could include technical, typographical, or photographic errors. Grid does not warrant that any of the materials on its Platform are accurate, complete, or current. Grid may make changes to the materials contained on its Platform at any time without notice.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Links
              </h2>
              <p>
                Grid has not reviewed all of the sites linked to its Platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Grid of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Modifications
              </h2>
              <p>
                Grid may revise these terms of service for its Platform at any time without notice. By using this Platform, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Portugal, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                9. User Accounts and Responsibilities
              </h2>
              <p>
                If you create an account on the Platform, you are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. You must notify Grid immediately of any unauthorized use of your account.
              </p>
              <p className="mt-4">
                You agree not to use the Platform to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Violate any applicable law or regulation</li>
                <li>Infringe upon or violate our intellectual property rights or the rights of others</li>
                <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate or discriminate</li>
                <li>Submit false or misleading information</li>
                <li>Upload viruses or malicious code</li>
                <li>Spam or send unsolicited messages</li>
                <li>Engage in any unlawful, fraudulent, or deceptive conduct</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                10. Content Ownership and License
              </h2>
              <p>
                You retain all rights to any content you submit, post or display on or through the Platform (including barbershop information, service listings, photos, etc.). By submitting content to the Platform, you grant Grid a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with providing the Platform and promoting Grid's services.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                11. Payment and Billing
              </h2>
              <p>
                All charges are payable in accordance with the pricing and payment terms displayed on the Platform. Grid reserves the right to change its fees and billing methods at any time with thirty (30) days' notice to users. Refunds are not available except as required by law.
              </p>
              <p className="mt-4">
                Your subscription will automatically renew at the end of each billing period unless you cancel your subscription in accordance with the terms of your subscription agreement.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                12. Trial Subscriptions
              </h2>
              <p>
                Grid offers a 14-day free trial for new users. A valid payment method is required to start a trial. Your trial will automatically convert to a paid subscription at the end of the trial period unless you cancel before the trial ends.
              </p>
              <p className="mt-4">
                You will be charged according to your selected plan on the day your trial ends. You may cancel your subscription at any time, but refunds will not be issued for any portion of an unused subscription period.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                13. Cancellation Policy
              </h2>
              <p>
                You may cancel your subscription at any time through your account settings or by contacting our support team. Cancellation will take effect at the end of your current billing period. You will not be charged again after cancellation.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                14. Data and Service Availability
              </h2>
              <p>
                Grid makes reasonable efforts to maintain the Platform's availability. However, the Platform is provided on an "as-is" basis. Grid does not guarantee uninterrupted, error-free service or that the Platform will be free from viruses or other harmful components.
              </p>
              <p className="mt-4">
                Grid is not responsible for any loss of data, business interruption, or other indirect damages resulting from the use of or inability to use the Platform.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                15. Limitation of Liability
              </h2>
              <p>
                In no case shall Grid, its suppliers, or other parties mentioned on this site be liable for any damages or losses related to your use of or inability to use the Platform, including but not limited to direct, indirect, incidental, consequential, special, or punitive damages, even if Grid has been advised of the possibility of such damages.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                16. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Grid and its officers, directors, employees, and agents from any and all claims, damages, losses, costs, or expenses (including attorney's fees) arising out of or related to your use of the Platform or violation of these terms.
              </p>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                17. Termination
              </h2>
              <p>
                Grid reserves the right to terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms of Service.
              </p>
              <p className="mt-4">
                Upon termination, your right to use the Platform will immediately cease. Your data will be handled in accordance with our Privacy Policy.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                18. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold">Grid Support</p>
                <p>Email: support@grid.com</p>
                <p>Web: <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact Page</Link></p>
              </div>
            </section>

            {/* Navigation */}
            <section className="pt-8 border-t border-slate-200">
              <div className="flex gap-4">
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  ← Privacy Policy
                </Link>
                <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                  Back to Home →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
