"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useI18n } from "@/contexts/I18nContext";

export default function ForgotPasswordPage() {
  const { t } = useI18n();
  const { resetPassword, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError(t.auth.forgotPassword.errors.emailRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.auth.forgotPassword.errors.emailInvalid);
      return;
    }

    const { error: resetError } = await resetPassword(email);

    if (resetError) {
      setError(resetError.message || t.auth.forgotPassword.errors.resetFailed);
      return;
    }

    setSubmitted(true);
    toast.success(t.auth.forgotPassword.toastSuccess);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-slate-900 to-slate-100 dark:to-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-xl dark:shadow-black/20 p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              {t.auth.forgotPassword.successTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t.auth.forgotPassword.successMessagePrefix}{" "}
              <span className="font-semibold">{email}</span>
              {t.auth.forgotPassword.successMessageSuffix}
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                {t.auth.forgotPassword.successInfo}
              </p>
            </div>

            <Link
              href="/auth/login"
              className="inline-block w-full py-2.5 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-lg font-semibold transition-all"
            >
              {t.auth.forgotPassword.backToSignIn}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-slate-900 to-slate-100 dark:to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-xl dark:shadow-black/20 p-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            {t.auth.forgotPassword.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            {t.auth.forgotPassword.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                {t.auth.forgotPassword.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.auth.forgotPassword.emailPlaceholder}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                  error ? "border-red-500 dark:border-red-600" : "border-slate-200 dark:border-slate-700"
                }`}
              />
              {error && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-lg font-semibold transition-all disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {isLoading ? t.auth.forgotPassword.submitLoading : t.auth.forgotPassword.submit}
            </button>
          </form>

          <p className="text-center mt-6 text-slate-600 dark:text-slate-400 text-sm">
            {t.auth.forgotPassword.remember}{" "}
            <Link href="/auth/login" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
              {t.auth.forgotPassword.signIn}
            </Link>
          </p>

          <div className="text-center mt-4">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-sm font-medium">
              {t.auth.forgotPassword.backHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
