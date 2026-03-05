"use client";

import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.subject.trim()) {
      toast.error("Please select a subject");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      toast.error("Please enter a message (at least 10 characters)");
      return;
    }

    setLoading(true);

    try {
      // In a real implementation, you would send this to a backend endpoint
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-700">
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have a question about Grid? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a subject...</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="feedback">General Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all disabled:bg-slate-400 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-slate-600 mb-8">
                  We're here to help! Reach out to us through any of the channels below or use the contact form.
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">
                    <a href="mailto:support@grid.com" className="text-blue-600 hover:text-blue-700">
                      support@grid.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Sales */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Sales</h3>
                  <p className="text-slate-600 mt-1">
                    <a href="mailto:sales@grid.com" className="text-blue-600 hover:text-blue-700">
                      sales@grid.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    Questions about pricing or plans
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.593 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm3.5-12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12 10.067 8.5 12 8.5s3.5 1.567 3.5 3.5zm1.5 0c0-2.485-2.015-4.5-4.5-4.5S7.5 9.515 7.5 12s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5zm3.5-6c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Need Quick Answers?</h3>
                <p className="text-sm text-blue-700 mb-3">
                  Check out our frequently asked questions before reaching out.
                </p>
                <Link
                  href="/#faq"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Browse FAQs →
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 p-8 bg-slate-50 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Can We Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🚀</span> Getting Started
                </h3>
                <p className="text-slate-600 text-sm">
                  Need help setting up your barbershop profile or understanding how to use Grid? We have detailed guides to help you get started quickly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🛠️</span> Technical Issues
                </h3>
                <p className="text-slate-600 text-sm">
                  Experiencing a technical problem? Our support team is here to help troubleshoot and resolve any issues you're facing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">💳</span> Billing & Plans
                </h3>
                <p className="text-slate-600 text-sm">
                  Questions about your subscription, billing, or changing your plan? We're happy to assist with any account-related inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex gap-4">
              <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                ← Terms of Service
              </Link>
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
