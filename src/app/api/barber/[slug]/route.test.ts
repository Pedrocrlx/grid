/**
 * @jest-environment node
 */
import { GET } from "./route";
import { NextResponse } from "next/server";

jest.mock("@/lib/prisma", () => ({
  prisma: {
    barberShop: {
      findUnique: jest.fn(),
    },
  },
}));

import { prisma } from "@/lib/prisma";

const mockFindUnique = prisma.barberShop.findUnique as jest.Mock;

const mockBarberShop = {
  id: "shop-1",
  slug: "test-shop",
  name: "Test Shop",
  description: "A test shop",
  services: [{ id: "s1", name: "Haircut", price: 15, duration: 30, barberShopId: "shop-1" }],
  barbers: [{ id: "b1", name: "John", imageUrl: null, description: "Expert" }],
};

function makeRequest(slug: string) {
  return {
    request: new Request(`http://localhost/api/barber/${slug}`),
    params: Promise.resolve({ slug }),
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("GET /api/barber/[slug]", () => {

  it("should return barber shop data with status 200", async () => {
    mockFindUnique.mockResolvedValue(mockBarberShop);
    const { request, params } = makeRequest("test-shop");

    const response = await GET(request, { params });
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.name).toBe("Test Shop");
    expect(body.services).toHaveLength(1);
    expect(body.barbers).toHaveLength(1);
  });

  it("should return 404 when barber shop is not found", async () => {
    mockFindUnique.mockResolvedValue(null);
    const { request, params } = makeRequest("unknown-shop");

    const response = await GET(request, { params });
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.error).toBe("Barber not found");
  });

  it("should return 500 on database error", async () => {
    mockFindUnique.mockRejectedValue(new Error("DB error"));
    const { request, params } = makeRequest("test-shop");

    const response = await GET(request, { params });
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe("Erro Interno");
  });

  it("should query by slug with services and barbers included", async () => {
    mockFindUnique.mockResolvedValue(mockBarberShop);
    const { request, params } = makeRequest("test-shop");

    await GET(request, { params });

    expect(mockFindUnique).toHaveBeenCalledWith({
      where: { slug: "test-shop" },
      include: { services: true, barbers: true },
    });
  });
});
