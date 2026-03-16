"use client";

import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-slate-900 to-slate-100 dark:to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-xl dark:shadow-black/20 p-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
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

          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            Check Your Email
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We've sent a verification link to your email address. Please click the link to verify your account and get started with Grid.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <span className="font-semibold">Didn't receive the email?</span>
              <br />
              Check your spam folder or wait a few minutes and try again.
            </p>
          </div>

          <Link
            href="/auth/login"
            className="inline-block w-full py-2.5 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-lg font-semibold transition-all"
          >
            Back to Sign In
          </Link>

          <p className="text-center mt-4 text-slate-600 dark:text-slate-400 text-sm">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
