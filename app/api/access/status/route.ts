// app/api/access/status/route.ts
import { NextRequest, NextResponse } from "next/server";

// From app/api/access/status/route.ts -> app/lib/access.ts
import { getAccessFromRequest } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const access = getAccessFromRequest(req);

    const paid = !!access?.paid;
    const expiresAt = typeof access?.expiresAt === "number" ? access.expiresAt : null;

    const ok = paid && !!expiresAt && expiresAt > Date.now();

    const res = NextResponse.json(
      { ok, expiresAt },
      { status: 200 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (e) {
    const res = NextResponse.json(
      { ok: false, expiresAt: null, error: "status_failed" },
      { status: 200 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
}
