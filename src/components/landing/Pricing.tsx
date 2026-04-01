"use client";

import { useI18n } from "@/contexts/I18nContext";

export function Pricing() {
  const { t } = useI18n();

  const plans = [
    {
      key: "basic" as const,
      price: "Coming Soon",
      features: ["Up to 3 barbers", "Up to 10 services", "Smart calendar"],
      highlighted: false,
    },
    {
      key: "pro" as const,
      price: "Coming Soon",
      features: ["Up to 10 barbers", "Custom branding", "Priority support"],
      highlighted: true,
    },
    {
      key: "enterprise" as const,
      price: t.pricing.ctaContact,
      features: ["Multi-shop management", "Dedicated manager", "Advanced Analytics"],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white dark:bg-slate-950 relative lg:py-24">
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3">
            Pricing
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 sm:text-4xl">
            {t.pricing.title}
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium sm:text-lg">{t.pricing.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 transition-all ${
                plan.highlighted
                  ? "border-2 border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20 transform sm:scale-105 z-10 relative"
                  : "border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-blue-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-1 sm:text-lg">
                  {t.pricing.plans[plan.key].name}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:text-xs">
                  {t.pricing.plans[plan.key].description}
                </p>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 tracking-tighter sm:text-4xl sm:mb-8">
                {plan.price}
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <svg className="w-4 h-4 text-blue-500 dark:text-blue-400 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-bold rounded-xl transition-all text-sm sm:text-base ${
                  plan.highlighted
                    ? "bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 shadow-xl shadow-blue-600/20"
                    : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {plan.key === "enterprise" ? t.pricing.ctaContact : t.pricing.ctaStart}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
