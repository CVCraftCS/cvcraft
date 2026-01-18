// app/api/access/status/route.ts
import { NextRequest, NextResponse } from "next/server";

// From app/api/access/status/route.ts -> app/lib/access.ts
import { getAccessFromRequest } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const access = getAccessFromRequest(req);

    const res = NextResponse.json(
      {
        ok: !!access?.ok,
        expiresAt: access?.expiresAt ?? null,
      },
      { status: 200 }
    );

    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (e) {
    const res = NextResponse.json(
      { ok: false, error: "status_failed" },
      { status: 200 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
}
