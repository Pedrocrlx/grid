import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Your Barbershop - Grid",
  description: "Complete your barbershop setup with Grid. Add your services, barbers, and create your professional booking page.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}