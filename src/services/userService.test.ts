/**
 * @jest-environment node
 */
import { userService } from "./userService";

jest.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

import { prisma } from "@/lib/prisma";

const mockUser = prisma.user as jest.Mocked<typeof prisma.user>;

const dbUser = {
  id: "db-user-1",
  email: "test@example.com",
  supabaseId: "supabase-123",
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-01"),
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("userService.createUser", () => {
  it("should create a new user when one does not exist", async () => {
    mockUser.findUnique.mockResolvedValue(null);
    mockUser.create.mockResolvedValue(dbUser);

    const result = await userService.createUser({
      email: "test@example.com",
      supabaseId: "supabase-123",
    });

    expect(result.user?.id).toBe("db-user-1");
    expect(result.user?.email).toBe("test@example.com");
    expect(result.error).toBeNull();
    expect(mockUser.create).toHaveBeenCalledTimes(1);
  });

  it("should return existing user without creating a new one", async () => {
    mockUser.findUnique.mockResolvedValue(dbUser);

    const result = await userService.createUser({
      email: "test@example.com",
      supabaseId: "supabase-123",
    });

    expect(result.user?.id).toBe("db-user-1");
    expect(result.error).toBeNull();
    expect(mockUser.create).not.toHaveBeenCalled();
  });

  it("should return error on database failure", async () => {
    mockUser.findUnique.mockResolvedValue(null);
    mockUser.create.mockRejectedValue(new Error("DB error"));

    const result = await userService.createUser({
      email: "test@example.com",
      supabaseId: "supabase-123",
    });

    expect(result.user).toBeNull();
    expect(result.error).not.toBeNull();
  });
});

describe("userService.getUserBySupabaseId", () => {
  it("should return user when found", async () => {
    mockUser.findUnique.mockResolvedValue(dbUser);

    const result = await userService.getUserBySupabaseId("supabase-123");

    expect(result.user?.supabaseId).toBe("supabase-123");
    expect(result.error).toBeNull();
  });

  it("should return null user when not found", async () => {
    mockUser.findUnique.mockResolvedValue(null);

    const result = await userService.getUserBySupabaseId("unknown-id");

    expect(result.user).toBeNull();
    expect(result.error).toBeNull();
  });

  it("should return error on database failure", async () => {
    mockUser.findUnique.mockRejectedValue(new Error("DB error"));

    const result = await userService.getUserBySupabaseId("supabase-123");

    expect(result.user).toBeNull();
    expect(result.error).not.toBeNull();
  });
});

describe("userService.getUserByEmail", () => {
  it("should return user when found by email", async () => {
    mockUser.findUnique.mockResolvedValue(dbUser);

    const result = await userService.getUserByEmail("test@example.com");

    expect(result.user?.email).toBe("test@example.com");
    expect(result.error).toBeNull();
  });

  it("should return null user when email not found", async () => {
    mockUser.findUnique.mockResolvedValue(null);

    const result = await userService.getUserByEmail("unknown@example.com");

    expect(result.user).toBeNull();
    expect(result.error).toBeNull();
  });
});

describe("userService.updateUserEmail", () => {
  it("should update and return the user with new email", async () => {
    const updatedUser = { ...dbUser, email: "new@example.com" };
    mockUser.update.mockResolvedValue(updatedUser);

    const result = await userService.updateUserEmail("supabase-123", "new@example.com");

    expect(result.user?.email).toBe("new@example.com");
    expect(result.error).toBeNull();
    expect(mockUser.update).toHaveBeenCalledWith({
      where: { supabaseId: "supabase-123" },
      data: { email: "new@example.com" },
    });
  });

  it("should return error on database failure", async () => {
    mockUser.update.mockRejectedValue(new Error("DB error"));

    const result = await userService.updateUserEmail("supabase-123", "new@example.com");

    expect(result.user).toBeNull();
    expect(result.error).not.toBeNull();
  });
});

describe("userService.deleteUser", () => {
  it("should delete user and return no error", async () => {
    mockUser.delete.mockResolvedValue(dbUser);

    const result = await userService.deleteUser("supabase-123");

    expect(result.error).toBeNull();
    expect(mockUser.delete).toHaveBeenCalledWith({
      where: { supabaseId: "supabase-123" },
    });
  });

  it("should return error on database failure", async () => {
    mockUser.delete.mockRejectedValue(new Error("DB error"));

    const result = await userService.deleteUser("supabase-123");

    expect(result.error).not.toBeNull();
  });
});
