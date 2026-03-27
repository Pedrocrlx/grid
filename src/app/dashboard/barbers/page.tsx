"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useI18n } from "@/contexts/I18nContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import GridIcon from "@/components/landing/GridIcon";
import { Navbar } from "../_components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  category?: string;
}

export function DashboardManagementLayout({ 
  children, 
  title, 
  subtitle, 
  category = "Management" 
}: DashboardLayoutProps) {
  const { isLoading, isAuthenticated } = useAuth();
  const { t } = useI18n();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <GridIcon />
          <p className="text-sm font-bold text-slate-900 dark:text-slate-50 tracking-widest uppercase">{t.dashboard.loadingTitle || "Loading..."}</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative font-sans text-slate-900 dark:text-slate-50">
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10 pt-20 sm:pt-28 pb-12 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 sm:mb-6 transition-colors"
          >
            <span aria-hidden="true" className="mr-2">←</span>
            {t.dashboard.backToDashboard || "Back to Dashboard"}
          </Link>
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2 sm:mb-3">{category}</p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-3 sm:mb-4">{title}</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>
        </div>
        {children}
      </main>
    </div>
  );
}