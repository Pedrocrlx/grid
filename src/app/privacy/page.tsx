import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Grid",
  description: "Grid Privacy Policy - How we collect, use, and protect your personal data on the Grid barbershop booking platform.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white text-slate-700">
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
              Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Grid ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Platform, including any other media form, media channel, mobile website, or mobile application related to, operated, or connected therewith (collectively, the "Platform").
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Platform. Your continued use of the Platform after posting changes to this Privacy Policy will mean you accept those changes.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="font-semibold text-slate-900 mb-3">2.1 Personal Information You Provide</p>
              <p>
                We collect information you directly provide to us, such as:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>
                  <span className="font-semibold">Account Registration:</span> Name, email address, phone number, password, and payment information
                </li>
                <li>
                  <span className="font-semibold">Barbershop Information:</span> Shop name, description, address, business hours, services offered, and barber profiles
                </li>
                <li>
                  <span className="font-semibold">Booking Information:</span> Customer names, phone numbers, email addresses, preferred time slots, and service preferences
                </li>
                <li>
                  <span className="font-semibold">Payment Information:</span> Credit card details (processed securely through our payment processor, Stripe)
                </li>
                <li>
                  <span className="font-semibold">Communications:</span> Messages you send us through support channels, feedback, and inquiries
                </li>
              </ul>

              <p className="font-semibold text-slate-900 mt-6 mb-3">2.2 Information Collected Automatically</p>
              <p>
                When you visit the Platform, we automatically collect certain information about your device and how you interact with it:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>
                  <span className="font-semibold">Log Data:</span> IP address, browser type, pages visited, time and date stamps, and referring URL
                </li>
                <li>
                  <span className="font-semibold">Device Information:</span> Device type, operating system, and unique device identifiers
                </li>
                <li>
                  <span className="font-semibold">Cookies and Tracking Technologies:</span> We use cookies, web beacons, and similar technologies to enhance your experience and analyze usage
                </li>
                <li>
                  <span className="font-semibold">Analytics:</span> Information about your interactions with the Platform through analytics tools
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>To provide and maintain the Platform and its services</li>
                <li>To process your transactions and send related information</li>
                <li>To create and manage your account</li>
                <li>To facilitate bookings between customers and barbershops</li>
                <li>To send you promotional communications (if you opt-in)</li>
                <li>To respond to your inquiries and customer support requests</li>
                <li>To monitor and analyze usage patterns and improve the Platform</li>
                <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>To comply with legal obligations and enforce our Terms of Service</li>
                <li>To personalize and improve your experience on the Platform</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. How We Share Your Information
              </h2>
              <p>
                We may share your information in the following circumstances:
              </p>

              <p className="font-semibold text-slate-900 mt-6 mb-3">4.1 Service Providers</p>
              <p>
                We share information with third-party service providers who assist us in operating the Platform and conducting our business, including:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Stripe (payment processing)</li>
                <li>Supabase (authentication and database hosting)</li>
                <li>Email service providers</li>
                <li>Analytics providers</li>
                <li>Cloud hosting providers</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-6 mb-3">4.2 Public Information</p>
              <p>
                Information you include in your public barbershop profile (shop name, description, services, barber names, hours) will be visible to customers searching for booking services.
              </p>

              <p className="font-semibold text-slate-900 mt-6 mb-3">4.3 Legal Requirements</p>
              <p>
                We may disclose your information when required by law or when we believe in good faith that such disclosure is necessary to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Comply with a legal obligation or court order</li>
                <li>Protect our rights, privacy, safety, or property</li>
                <li>Protect against fraud or security issues</li>
                <li>Enforce our Terms of Service</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-6 mb-3">4.4 Business Transfers</p>
              <p>
                If Grid is involved in a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction or proceeding, your information may be part of that transaction.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement comprehensive technical, administrative, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>HTTPS encryption for all data transmitted to and from the Platform</li>
                <li>Secure password hashing and salting</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure handling of payment information through PCI-compliant processors</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. You acknowledge and assume the risk associated with transmitting information to us.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specifically:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>
                  <span className="font-semibold">Active Accounts:</span> Information is retained while your account is active
                </li>
                <li>
                  <span className="font-semibold">Deleted Accounts:</span> Upon deletion, we retain data for 90 days for recovery purposes, then permanently delete it
                </li>
                <li>
                  <span className="font-semibold">Legal Obligations:</span> We may retain information longer if required by law
                </li>
                <li>
                  <span className="font-semibold">Booking Records:</span> Historical booking data is retained for business and legal purposes
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="font-semibold text-slate-900 mb-3">7.1 Access and Portability</p>
              <p>
                You have the right to access your personal information and request a portable copy of your data in a structured, commonly used, and machine-readable format.
              </p>

              <p className="font-semibold text-slate-900 mt-6 mb-3">7.2 Correction and Deletion</p>
              <p>
                You can update or correct your personal information through your account settings. You also have the right to request deletion of your account and associated data, subject to legal retention requirements.
              </p>

              <p className="font-semibold text-slate-900 mt-6 mb-3">7.3 Marketing Communications</p>
              <p>
                You can opt-out of receiving promotional emails from us by clicking the "unsubscribe" link in our emails or adjusting your preferences in your account settings.
              </p>

              <p className="font-semibold text-slate-900 mt-6 mb-3">7.4 Cookies</p>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of the Platform.
              </p>

              <p className="font-semibold text-slate-900 mt-6 mb-3">7.5 GDPR Rights (EU Users)</p>
              <p>
                If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to object to processing and the right to lodge a complaint with a supervisory authority.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p>
                Grid uses cookies and similar tracking technologies to enhance your experience and collect information about how you use the Platform. These include:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>
                  <span className="font-semibold">Essential Cookies:</span> Required for authentication and security
                </li>
                <li>
                  <span className="font-semibold">Analytics Cookies:</span> Help us understand how users interact with the Platform
                </li>
                <li>
                  <span className="font-semibold">Preference Cookies:</span> Remember your settings and preferences
                </li>
              </ul>
              <p className="mt-4">
                You can control your cookie preferences through your browser settings or our cookie consent banner.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                9. Third-Party Links
              </h2>
              <p>
                The Platform may contain links to third-party websites and services that are not operated by Grid. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                10. Children's Privacy
              </h2>
              <p>
                The Platform is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information as quickly as possible.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                11. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to, stored in, and processed in countries other than your country of residence, including Portugal and the United States. These countries may not have data protection laws equivalent to those in your home country. By using the Platform, you consent to such transfers.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                12. Data Processing Agreement
              </h2>
              <p>
                For users subject to GDPR or similar regulations, we process personal data as a Data Processor on behalf of Barbershop Owners (Data Controllers). A Data Processing Agreement is available upon request.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                13. Changes to This Privacy Policy
              </h2>
              <p>
                Grid may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting the revised Privacy Policy on the Platform and updating the "Last updated" date. Your continued use of the Platform after changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold">Grid Privacy Team</p>
                <p>Email: privacy@grid.com</p>
                <p>Support: <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact Page</Link></p>
              </div>
              <p className="mt-4">
                If you are located in the EU and wish to lodge a complaint with a supervisory authority, you have the right to do so in your country of residence.
              </p>
            </section>

            {/* Navigation */}
            <section className="pt-8 border-t border-slate-200">
              <div className="flex gap-4">
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                  ← Terms of Service
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
