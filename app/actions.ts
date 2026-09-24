"use server";

import { redirect } from "next/navigation";

import { createSession, verifyPassword } from "@/lib/auth";

/* ============================================================
   FYP Desk - login server action (A3 §2/§4)
   The password is compared ON THE SERVER (this module never
   reaches the browser). Success writes an HttpOnly session
   cookie and only then are the protected pages served.
   ============================================================ */

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (!verifyPassword(password)) {
    redirect("/login?error=1");
  }

  await createSession();
  redirect("/");
}
