import { Header } from "../site-chrome";
import { login } from "../actions";

/* ============================================================
   FYP Desk — the private-access gate (the ONLY public route)
   A visitor without a session cookie sees ONLY this form —
   never the plans, prices, or guide (A3 §2). The password is
   verified server-side in app/actions.ts; this page ships no
   secret.
   ============================================================ */

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <>
      <Header />
      <main className="login-main">
        <div className="login-card">
          <h1 className="login-heading">Private access</h1>
          <p className="login-text">
            FYP Desk is a private service for class fellows. Enter the access
            password you received on WhatsApp to continue.
          </p>
          <form className="login-form" action={login}>
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Access password"
              autoComplete="current-password"
              required
              autoFocus
            />
            {error && (
              <p className="login-error">Wrong password — try again.</p>
            )}
            <button type="submit" className="btn btn-primary">
              Enter
            </button>
          </form>
          <p className="login-note">
            No password? Message the number you were given — access is shared
            one class at a time.
          </p>
        </div>
      </main>
    </>
  );
}
