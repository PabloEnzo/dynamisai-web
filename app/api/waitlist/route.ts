import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Espera un momento." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const email: string = String(body.email ?? "").trim();
    const product: string = String(body.product ?? "Waive").trim();

    if (!email) {
      return NextResponse.json(
        { error: "El email es obligatorio." },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { error: "La dirección de email es demasiado larga." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "La dirección de email no es válida." },
        { status: 400 }
      );
    }

    const safeEmail = escapeHtml(email);
    const safeProduct = escapeHtml(product);

    await resend.emails.send({
      from: "DynamisAI Web <consulting@dynamisai.es>",
      to: "consulting@dynamisai.es",
      subject: `[Waitlist] ${safeProduct}: ${safeEmail}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0055e0;">Nueva suscripción a la lista de espera</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px; width: 80px;"><strong>Producto</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${safeProduct}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px;"><strong>Email</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${safeEmail}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error al registrar el email." },
      { status: 500 }
    );
  }
}
