import "server-only";

import { cookies } from "next/headers";

/* ============================================================
   FYP Desk — server-only auth helpers (A3 §4/§5)
   The password lives ONLY in the FYP_PASSWORD environment
   variable (Vercel Environment Variable — the A3 "Recommended"
   path). Nothing in this file is ever shipped to the client.
   ============================================================ */

export const SESSION_COOKIE = "fyp_desk_session";
export const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours — A3 §5 rotation note

/** Server-side password check. Never reaches the client bundle. */
export function verifyPassword(input: string): boolean {
  const password = process.env.FYP_PASSWORD;
  if (!password) {
    // Not configured — the gate stays shut rather than falling open.
    return false;
  }
  return input === password;
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value === "ok";
}

export async function createSession(): Promise<void> {
  const store = await cookies();
  store.set(SESSION_COOKIE, "ok", {
    httpOnly: true,              // JS cannot read or forge it (A3 §2)
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
