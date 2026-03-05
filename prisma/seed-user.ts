import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function main() {
  const email = "demo@grid.com";
  const password = "Demo@12345";

  try {
    // 1. Create user in Supabase Auth
    const { data: authUser, error: authError } =
      await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });

    if (authError) {
      console.log(
        "⚠️  User already exists in Supabase Auth or error:",
        authError.message
      );
    } else {
      console.log("✅ User created in Supabase Auth:", email);
    }

    // 2. Create/update user in database
    const supabaseId = authUser?.user?.id || "demo-user-id";
    const user = await prisma.user.upsert({
      where: { email },
      update: { supabaseId },
      create: {
        email,
        supabaseId,
      },
    });

    console.log("✅ User seeded in database:", user.email);
    console.log("📝 Test credentials:");
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
  } catch (error) {
    console.error("❌ Error:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });