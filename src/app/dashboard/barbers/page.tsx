"use client";

import { useI18n } from "@/contexts/I18nContext";
import { DashboardManagementLayout } from "../_components/DashboardManagementLayout";

export default function BarbersPage() {
  const { t } = useI18n();

  return (
    <DashboardManagementLayout 
      title={t.dashboard.barbers?.title || "Barbers"} 
      subtitle={t.dashboard.barbers?.subtitle || "Manage your barbershop team"}
    >
      <div className="space-y-6">
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 mb-4 font-medium">
            Barber management functionality is coming soon.
          </p>
          <p className="text-sm text-slate-400">
            This page will allow you to add and manage barbers in your team.
          </p>
        </div>
      </div>
    </DashboardManagementLayout>
  );
}