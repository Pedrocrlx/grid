"use client";

export function Stats() {
  const stats = [
    { value: "1,000+", label: "Bookings Managed" },
    { value: "50+", label: "Active Shops" },
    { value: "5", label: "Countries Supported" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-xs font-bold tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
