// src/pages/schools/success.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SchoolsSuccess() {
  const router = useRouter();
  const { session_id } = router.query;

  const [state, setState] = useState({ loading: true, error: "", code: "", expiresAt: "" });

  useEffect(() => {
    if (!session_id) return;

    (async () => {
      try {
        const res = await fetch("/api/schools/provision", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id }),
        });
        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data.error || "Provision failed");

        setState({
          loading: false,
          error: "",
          code: data.code || "",
          expiresAt: data.expiresAt || "",
        });
      } catch (e) {
        setState((s) => ({ ...s, loading: false, error: e.message || "Error" }));
      }
    })();
  }, [session_id]);

  const title = "School licence activated | CVCraft Classroom";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="min-h-screen bg-[#05070f] text-white px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <Link href="/schools" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
            ← Back to Schools
          </Link>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
            School licence activated ✅
          </h1>

          <p className="mt-3 text-white/75">
            Keep the code below safe — it’s used to unlock Teacher Mode for your school.
          </p>

          <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            {state.loading ? (
              <div className="text-white/80">Confirming your licence…</div>
            ) : state.error ? (
              <div className="text-red-200">
                {state.error}
                <div className="mt-3 text-sm text-white/70">
                  If payment succeeded but this page failed, email{" "}
                  <a className="underline" href="mailto:cvcraftcs@outlook.com">cvcraftcs@outlook.com</a>{" "}
                  with your session id.
                </div>
              </div>
            ) : (
              <>
                <div className="text-sm text-white/70">Your school code</div>
                <div className="mt-2 font-mono text-2xl tracking-wider">{state.code}</div>
                {state.expiresAt ? (
                  <div className="mt-3 text-sm text-white/60">
                    Expires: {new Date(state.expiresAt).toLocaleDateString("en-GB")}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/cv?teacher=1"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Open Teacher Mode
                  </Link>

                  <Link
                    href="/schools"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                  >
                    Back to Schools
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
