"use client";

import React, { useState, useEffect } from "react";

// --- INÍCIO DOS MOCKS PARA PRÉ-VISUALIZAÇÃO ---
// ATENÇÃO: Ao copiar para o seu projeto, apague estes mocks e use os seus imports reais:
/*
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
*/

const useAuth = () => {
  return {
    user: { email: "admin@barbershop.com" },
    isLoading: false,
    isAuthenticated: true,
  };
};

const useRouter = () => {
  return { push: (url: string) => console.log(`Navegando para: ${url}`) };
};
// --- FIM DOS MOCKS ---

// --- ÍCONES ---
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

// --- TIPOS ---
type Barber = { id: string; name: string; specialty?: string; photo?: string };
type Service = { id: string; name: string; price: string; duration: string };

export default function OnboardingPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Estados do Wizard
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Dados do Formulário
  const [shopName, setShopName] = useState("");
  const [shopSlug, setShopSlug] = useState("");
  const [shopLogo, setShopLogo] = useState<string | null>(null);
  const [shopAbout, setShopAbout] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopPhone, setShopPhone] = useState("");
  
  const [barbers, setBarbers] = useState<Barber[]>([{ id: "1", name: "", specialty: "" }]);
  const [services, setServices] = useState<Service[]>([{ id: "1", name: "", price: "", duration: "30" }]);

  // Auto-gerar slug baseado no nome
  useEffect(() => {
    if (shopName && currentStep === 1) {
      const generatedSlug = shopName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setShopSlug(generatedSlug);
    }
  }, [shopName, currentStep]);

  // Redirecionamento de segurança
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) return null;

  // --- HANDLERS ---
  const handleNext = () => setCurrentStep((p) => Math.min(p + 1, totalSteps));
  const handleBack = () => setCurrentStep((p) => Math.max(p - 1, 1));

  const addBarber = () => {
    if (barbers.length < 10) {
      setBarbers([...barbers, { id: Date.now().toString(), name: "", specialty: "" }]);
    }
  };
  const removeBarber = (id: string) => setBarbers(barbers.filter((b) => b.id !== id));
  const updateBarber = (id: string, field: keyof Barber, value: string) => {
    setBarbers(barbers.map((b) => (b.id === id ? { ...b, [field]: value } : b)));
  };

  const addService = () => {
    if (services.length < 20) {
      setServices([...services, { id: Date.now().toString(), name: "", price: "", duration: "30" }]);
    }
  };
  const removeService = (id: string) => setServices(services.filter((s) => s.id !== id));
  const updateService = (id: string, field: keyof Service, value: string) => {
    setServices(services.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const handleLaunch = () => {
    console.log("Launching Data:", { shopName, shopSlug, barbers, services });
    // Aqui você faria a chamada para a API (ex: Supabase, Firebase, ou seu backend)
    router.push("/dashboard");
  };

  // --- VALIDAÇÕES SIMPLES ---
  const isStep1Valid = shopName.trim().length > 0 && shopSlug.trim().length > 0;
  const isStep2Valid = barbers.some((b) => b.name.trim().length > 0);
  const isStep3Valid = services.some((s) => s.name.trim().length > 0 && s.price.trim().length > 0);

  const canProceed = 
    (currentStep === 1 && isStep1Valid) ||
    (currentStep === 2 && isStep2Valid) ||
    (currentStep === 3 && isStep3Valid);

  return (
    <div className="min-h-screen bg-white relative font-sans text-slate-900 flex flex-col">
      {/* Fundo de grade abstrato (Igual à landing/dashboard) */}
      <div className="fixed inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
      }} />

      {/* Header Simples */}
      <header className="relative z-10 w-full py-8 text-center">
        <div className="inline-flex items-center justify-center space-x-2">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6" aria-hidden="true">
            <div className="bg-slate-200 rounded-sm" />
            <div className="bg-slate-200 rounded-sm" />
            <div className="bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-sm" />
            <div className="bg-slate-200 rounded-sm" />
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">Grid</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 pb-20">
        
        {/* Stepper Visual */}
        <div className="w-full max-w-2xl mb-8 sm:mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 rounded-full -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>

            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step} 
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300 ${
                  step < currentStep 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : step === currentStep
                    ? "bg-white border-blue-600 text-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                {step < currentStep ? <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5" /> : step}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className={currentStep >= 1 ? "text-slate-900" : ""}>Shop</span>
            <span className={currentStep >= 2 ? "text-slate-900" : ""}>Team</span>
            <span className={currentStep >= 3 ? "text-slate-900" : ""}>Services</span>
            <span className={currentStep >= 4 ? "text-slate-900" : ""}>Launch</span>
          </div>
        </div>

        {/* Formulário Card */}
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl shadow-slate-200/50 rounded-3xl p-6 sm:p-10 transition-all">
          
          {/* STEP 1: BARBERSHOP */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Create your BarberShop</h2>
              <p className="text-slate-500 mb-8">Let's start with the basics. Tell us about your business.</p>

              <div className="space-y-6">
                
                {/* Logo Upload */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 overflow-hidden relative cursor-pointer hover:bg-slate-50 transition-colors">
                    {shopLogo ? (
                       <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl uppercase">
                         {shopName ? shopName.charAt(0) : "B"}
                       </div>
                    ) : (
                      <PlusIcon className="w-6 h-6" />
                    )}
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      onChange={(e) => setShopLogo(e.target.files?.[0] ? "uploaded" : null)} 
                      title="Upload Logo" 
                      accept="image/*"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-700">Shop Logo</h3>
                    <p className="text-xs text-slate-500">Optional. Recommended size 256x256px.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="shopName" className="block text-sm font-bold text-slate-700 mb-2">
                      Barbershop Name *
                    </label>
                    <input
                      id="shopName"
                      type="text"
                      placeholder="e.g. Classic Cuts"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="shopSlug" className="block text-sm font-bold text-slate-700 mb-2">
                      Booking URL (Slug) *
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-blue-600/50 focus-within:border-blue-600 transition-all bg-white">
                      <span className="px-4 py-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200 flex items-center select-none">
                        grid.com/
                      </span>
                      <input
                        id="shopSlug"
                        type="text"
                        placeholder="classic-cuts"
                        value={shopSlug}
                        onChange={(e) => setShopSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                        className="w-full px-4 py-3 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="shopAbout" className="block text-sm font-bold text-slate-700 mb-2">
                    About / Description
                  </label>
                  <textarea
                    id="shopAbout"
                    rows={3}
                    placeholder="Tell your clients a little bit about your barbershop..."
                    value={shopAbout}
                    onChange={(e) => setShopAbout(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="shopPhone" className="block text-sm font-bold text-slate-700 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="shopPhone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={shopPhone}
                      onChange={(e) => setShopPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="shopAddress" className="block text-sm font-bold text-slate-700 mb-2">
                      Location / Address
                    </label>
                    <input
                      id="shopAddress"
                      type="text"
                      placeholder="123 Main St, City"
                      value={shopAddress}
                      onChange={(e) => setShopAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 2: BARBERS */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Add your Team</h2>
              <p className="text-slate-500 mb-8">Who is working at {shopName || "your shop"}? You can add up to 10 barbers.</p>

              <div className="space-y-6">
                {barbers.map((barber, index) => (
                  <div key={barber.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 relative overflow-hidden cursor-pointer hover:bg-slate-50">
                      <PlusIcon className="w-5 h-5" />
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" title="Upload Photo" accept="image/*" />
                    </div>
                    
                    <div className="flex-1 w-full space-y-3">
                      <input
                        type="text"
                        placeholder={`Barber ${index + 1} Name *`}
                        value={barber.name}
                        onChange={(e) => updateBarber(barber.id, "name", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Specialty (e.g. Fades, Beards) - Optional"
                        value={barber.specialty || ""}
                        onChange={(e) => updateBarber(barber.id, "specialty", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all text-sm"
                      />
                    </div>

                    {barbers.length > 1 && (
                      <button
                        onClick={() => removeBarber(barber.id)}
                        className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors self-end sm:self-center"
                        title="Remove barber"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}

                {barbers.length < 10 && (
                  <button
                    onClick={addBarber}
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 py-2 px-1 transition-colors"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Add another barber
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: SERVICES */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Add your Services</h2>
                  <p className="text-slate-500">What do you offer? Add up to 20 services.</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Cabeçalho da tabela de serviços (apenas desktop) */}
                <div className="hidden sm:flex gap-3 px-1">
                  <div className="flex-[2] text-xs font-bold uppercase tracking-wider text-slate-500">Service Name</div>
                  <div className="flex-1 text-xs font-bold uppercase tracking-wider text-slate-500">Price ($)</div>
                  <div className="flex-1 text-xs font-bold uppercase tracking-wider text-slate-500">Duration (min)</div>
                  <div className="w-11"></div>
                </div>

                {services.map((service, index) => (
                  <div key={service.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-50 sm:bg-transparent p-4 sm:p-0 rounded-xl border sm:border-none border-slate-100">
                    <div className="w-full sm:flex-[2]">
                      <label className="block sm:hidden text-xs font-bold text-slate-500 mb-1">Service Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Haircut & Beard"
                        value={service.name}
                        onChange={(e) => updateService(service.id, "name", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                      />
                    </div>
                    
                    <div className="w-full sm:flex-1 flex gap-3">
                      <div className="flex-1">
                        <label className="block sm:hidden text-xs font-bold text-slate-500 mb-1">Price</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={service.price}
                            onChange={(e) => updateService(service.id, "price", e.target.value)}
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <label className="block sm:hidden text-xs font-bold text-slate-500 mb-1">Duration</label>
                        <select
                          value={service.duration}
                          onChange={(e) => updateService(service.id, "duration", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all appearance-none"
                        >
                          <option value="15">15 min</option>
                          <option value="30">30 min</option>
                          <option value="45">45 min</option>
                          <option value="60">1h</option>
                          <option value="90">1h 30m</option>
                          <option value="120">2h</option>
                        </select>
                      </div>
                    </div>

                    {services.length > 1 ? (
                      <button
                        onClick={() => removeService(service.id)}
                        className="mt-2 sm:mt-0 p-3 w-full sm:w-auto flex justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    ) : <div className="hidden sm:block w-11"></div>}
                  </div>
                ))}

                {services.length < 20 && (
                  <button
                    onClick={addService}
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 py-2 px-1 transition-colors"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Add another service
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: PREVIEW & LAUNCH */}
          {currentStep === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">You're all set!</h2>
                <p className="text-slate-500">Review your barbershop details before launching.</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-4">
                    {shopLogo && (
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0 uppercase">
                        {shopName.charAt(0) || "B"}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Shop Name</p>
                      <p className="text-lg font-bold text-slate-900">{shopName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Booking URL</p>
                    <p className="text-sm font-medium text-blue-600">grid.com/{shopSlug}</p>
                  </div>
                </div>

                {(shopAddress || shopPhone) && (
                  <div className="border-b border-slate-200 pb-4 text-sm text-slate-600 flex flex-col gap-2">
                    {shopAddress && <p><span className="font-semibold text-slate-700">Location:</span> {shopAddress}</p>}
                    {shopPhone && <p><span className="font-semibold text-slate-700">Contact:</span> {shopPhone}</p>}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Team Size</p>
                    <p className="text-2xl font-black text-slate-900">{barbers.filter(b => b.name.trim()).length} Barbers</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Services</p>
                    <p className="text-2xl font-black text-slate-900">{services.filter(s => s.name.trim()).length} Active</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Controles de Navegação (Rodapé do Card) */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
              >
                Back
              </button>
            ) : (
              <div></div> // Espaçador
            )}

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  canProceed 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20 hover:shadow-blue-500/40 transform active:scale-95" 
                    : "bg-slate-100 text-slate-400 shadow-none cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleLaunch}
                className="px-8 py-3 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform active:scale-95"
              >
                Launch Barbershop
              </button>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}