import { prisma } from "@/lib/prisma";

interface UserCreateData {
  email: string;
  supabaseId: string;
}

interface UserResponse {
  id: string;
  email: string;
  supabaseId: string;
  createdAt: Date;
  updatedAt: Date;
}

class UserService {
  /**
   * Create a new user in the database
   * @param data - Email and Supabase ID
   * @returns Created user or error
   */
  async createUser(data: UserCreateData): Promise<{ user: UserResponse | null; error: Error | null }> {
    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { supabaseId: data.supabaseId },
      });

      if (existingUser) {
        return {
          user: {
            id: existingUser.id,
            email: existingUser.email,
            supabaseId: existingUser.supabaseId,
            createdAt: existingUser.createdAt,
            updatedAt: existingUser.updatedAt,
          },
          error: null,
        };
      }

      const user = await prisma.user.create({
        data: {
          email: data.email,
          supabaseId: data.supabaseId,
        },
      });

      console.log(`User created: ${user.email}`);

      return {
        user: {
          id: user.id,
          email: user.email,
          supabaseId: user.supabaseId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        error: null,
      };
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to create user");
      console.error("Error creating user:", error);
      return { user: null, error };
    }
  }

  /**
   * Get user by Supabase ID
   * @param supabaseId - Supabase user ID
   * @returns User or error
   */
  async getUserBySupabaseId(supabaseId: string): Promise<{ user: UserResponse | null; error: Error | null }> {
    try {
      const user = await prisma.user.findUnique({
        where: { supabaseId },
      });

      if (!user) {
        return { user: null, error: null };
      }

      return {
        user: {
          id: user.id,
          email: user.email,
          supabaseId: user.supabaseId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        error: null,
      };
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to get user");
      console.error("Error getting user:", error);
      return { user: null, error };
    }
  }

  /**
   * Get user by email
   * @param email - User email
   * @returns User or error
   */
  async getUserByEmail(email: string): Promise<{ user: UserResponse | null; error: Error | null }> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return { user: null, error: null };
      }

      return {
        user: {
          id: user.id,
          email: user.email,
          supabaseId: user.supabaseId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        error: null,
      };
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to get user");
      console.error("Error getting user:", error);
      return { user: null, error };
    }
  }

  /**
   * Update user email
   * @param supabaseId - Supabase user ID
   * @param newEmail - New email address
   * @returns Updated user or error
   */
  async updateUserEmail(supabaseId: string, newEmail: string): Promise<{ user: UserResponse | null; error: Error | null }> {
    try {
      const user = await prisma.user.update({
        where: { supabaseId },
        data: { email: newEmail },
      });

      return {
        user: {
          id: user.id,
          email: user.email,
          supabaseId: user.supabaseId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        error: null,
      };
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to update user");
      console.error("Error updating user:", error);
      return { user: null, error };
    }
  }

  /**
   * Delete user
   * @param supabaseId - Supabase user ID
   * @returns Error if deletion fails
   */
  async deleteUser(supabaseId: string): Promise<{ error: Error | null }> {
    try {
      await prisma.user.delete({
        where: { supabaseId },
      });

      console.log(`User deleted: ${supabaseId}`);
      return { error: null };
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to delete user");
      console.error("Error deleting user:", error);
      return { error };
    }
  }
}

export const userService = new UserService();
