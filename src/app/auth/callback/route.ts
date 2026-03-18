import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirectTo") ?? "/onboarding";

  if (code) {
    // Create a response first so we can set cookies on it
    const response = NextResponse.redirect(`${origin}${redirectTo}`);

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            // Set cookies on both the request and the response
            cookiesToSet.forEach(({ name, value, options }) => {
              request.cookies.set(name, value);
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { error, data } = await supabase.auth.exchangeCodeForSession(code);

    console.log("[OAuth Callback] Exchange result:", { error: error?.message, hasSession: !!data.session });

    if (!error) {
      console.log("[OAuth Callback] Success! Redirecting to:", redirectTo);
      return response;
    } else {
      console.log("[OAuth Callback] Error:", error.message);
    }
  } else {
    console.log("[OAuth Callback] No code in URL");
  }

  // Return to login with error if code exchange failed
  const errorRedirect = `${origin}/auth/login?error=oauth_callback_error`;
  console.log("[OAuth Callback] Final error redirect:", errorRedirect);
  return NextResponse.redirect(errorRedirect);
}

