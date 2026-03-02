import { BarberService } from "@/services/barberService";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BookingSheet } from "./_components/BookingSheet";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "favicon.ico") return {};

  const barber = await BarberService.getProfileBySlug(slug);

  if (!barber) {
    return {};
  }

  return {
    title: `${barber.name} | Grid`,
    description: barber.description || `Book your appointment at ${barber.name}`,
  };
}

export default async function BarberPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "favicon.ico") return notFound();

  const barber = await BarberService.getProfileBySlug(slug);

  if (!barber) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                <div className="bg-slate-200 rounded-sm"></div>
                <div className="bg-slate-200 rounded-sm"></div>
                <div className="highlight-square rounded-sm"></div>
                <div className="bg-slate-200 rounded-sm"></div>
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Grid
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-30"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold tracking-wider uppercase">
              @{barber.slug}
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-4">
              {barber.name}
            </h1>
            {barber.description && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {barber.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
              Services
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Choose Your Service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {barber.services && barber.services.length > 0 ? (
              barber.services.map((service) => (
                <div
                  key={service.id}
                  className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all bg-white"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-2xl font-extrabold text-blue-600">
                        {Intl.NumberFormat("pt-PT", {
                          style: "currency",
                          currency: "EUR",
                        }).format(Number(service.price))}
                      </p>
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      {service.duration} min
                    </div>
                  </div>

                  <BookingSheet
                    service={{
                      ...service,
                      description: service.description ?? null,
                      price: Number(service.price),
                      barberShopId: barber.id,
                    }}
                    barbers={barber.barbers}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-16">
                <p className="text-slate-500 text-lg">
                  No services available at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
              Team
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Meet Our Barbers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {barber.barbers && barber.barbers.length > 0 ? (
              barber.barbers.map((barber) => (
                <div
                  key={barber.id}
                  className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all bg-slate-50/50 text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-black text-white">
                      {barber.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {barber.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {barber.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-16">
                <p className="text-slate-500 text-lg">
                  No barbers available at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div className="bg-slate-700 rounded-sm"></div>
              <div className="bg-slate-700 rounded-sm"></div>
              <div className="highlight-square rounded-sm"></div>
              <div className="bg-slate-700 rounded-sm"></div>
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Grid
            </span>
          </Link>
          <p className="text-slate-400 text-sm italic mb-6">
            Your schedule, organized.
          </p>
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Grid SaaS. Built for the modern barber.
          </p>
        </div>
      </footer>
    </div>
  );
}
