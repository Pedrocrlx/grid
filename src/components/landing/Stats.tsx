"use client";

import { useI18n } from "@/contexts/I18nContext";

export function Stats() {
  const { t } = useI18n();

  const stats = [
    { value: "1,000+", labelKey: "bookings" as const },
    { value: "50+",    labelKey: "shops" as const },
    { value: "5",      labelKey: "countries" as const },
    { value: "99.9%",  labelKey: "uptime" as const },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, labelKey }) => (
            <div key={labelKey}>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{value}</div>
              <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-400">
                {t.stats[labelKey]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
