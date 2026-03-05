"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div className="bg-slate-200 rounded-sm"></div>
              <div className="bg-slate-200 rounded-sm"></div>
              <div className="bg-blue-600 rounded-sm"></div>
              <div className="bg-slate-200 rounded-sm"></div>
            </div>
            <span className="text-xl font-extrabold text-slate-900">Grid</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Welcome to Your Dashboard
            </h1>
            <p className="text-slate-600">
              You're logged in as <span className="font-semibold">{user?.email}</span>
            </p>
          </div>

          {/* Coming Soon Sections */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overview */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">📊 Overview</h2>
              <p className="text-slate-600 text-sm mb-4">
                View your booking statistics and business metrics
              </p>
              <div className="text-slate-500 text-xs font-semibold">Coming Soon</div>
            </div>

            {/* Barbers Management */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-slate-50 rounded-lg border border-green-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">✂️ Barbers</h2>
              <p className="text-slate-600 text-sm mb-4">
                Manage your barbers and their profiles
              </p>
              <div className="text-slate-500 text-xs font-semibold">Coming Soon</div>
            </div>

            {/* Services Management */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-slate-50 rounded-lg border border-purple-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">💇 Services</h2>
              <p className="text-slate-600 text-sm mb-4">
                Manage services and pricing
              </p>
              <div className="text-slate-500 text-xs font-semibold">Coming Soon</div>
            </div>

            {/* Bookings */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-slate-50 rounded-lg border border-orange-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">📅 Bookings</h2>
              <p className="text-slate-600 text-sm mb-4">
                View and manage customer bookings
              </p>
              <div className="text-slate-500 text-xs font-semibold">Coming Soon</div>
            </div>

            {/* Settings */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-slate-50 rounded-lg border border-indigo-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">⚙️ Settings</h2>
              <p className="text-slate-600 text-sm mb-4">
                Configure your barbershop details
              </p>
              <div className="text-slate-500 text-xs font-semibold">Coming Soon</div>
            </div>

            {/* Billing */}
            <div className="p-6 bg-gradient-to-br from-pink-50 to-slate-50 rounded-lg border border-pink-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">💳 Billing</h2>
              <p className="text-slate-600 text-sm mb-4">
                Manage your subscription and payments
              </p>
              <div className="text-slate-500 text-xs font-semibold">Coming Soon</div>
            </div>
          </div>

          {/* Info Message */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Next Step:</span> Complete the Chunk 4 implementation to enable all dashboard features including barber shop creation, onboarding, and subscription management.
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
