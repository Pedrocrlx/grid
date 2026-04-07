import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Grid support team. We're here to help with questions about our barbershop booking platform.",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with Grid support team. We're here to help with questions about our barbershop booking platform.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}