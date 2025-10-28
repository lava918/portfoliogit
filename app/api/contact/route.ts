import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json().catch(() => null)
  if (!data?.name || !data?.email || !data?.message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }
  // In production, integrate email or CRM here.
  // For now, just acknowledge.
  return NextResponse.json({ ok: true })
}
