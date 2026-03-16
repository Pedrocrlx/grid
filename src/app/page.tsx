import { FinalCTA, Pricing, HowItWorks, Features, Stats, Hero, Navbar, Footer } from "../components/landing";

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
