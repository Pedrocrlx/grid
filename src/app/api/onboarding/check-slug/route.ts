import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const RESERVED_SLUGS = [
  "admin", "api", "auth", "dashboard", "pricing", "about",
  "contact", "terms", "privacy", "help", "support", "blog",
  "login", "signup", "logout", "onboarding", "billing",
];

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug")?.trim().toLowerCase();

  if (!slug || slug.length < 3 || slug.length > 50) {
    return NextResponse.json({ available: false }, { status: 200 });
  }

  if (!/^[a-z0-9-]+$/.test(slug) || RESERVED_SLUGS.includes(slug)) {
    return NextResponse.json({ available: false }, { status: 200 });
  }

  const existing = await prisma.barberShop.findUnique({ where: { slug } });
  return NextResponse.json({ available: !existing }, { status: 200 });
}
