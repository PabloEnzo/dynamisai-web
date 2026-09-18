import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (best-effort; resets per serverless instance)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
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

const LIMITS = { name: 100, email: 254, subject: 200, message: 5000 };

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
    const name: string = String(body.name ?? "").trim();
    const email: string = String(body.email ?? "").trim();
    const subject: string = String(body.subject ?? "").trim();
    const message: string = String(body.message ?? "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (name.length > LIMITS.name || email.length > LIMITS.email ||
        subject.length > LIMITS.subject || message.length > LIMITS.message) {
      return NextResponse.json(
        { error: "Uno o más campos superan la longitud máxima permitida." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "La dirección de email no es válida." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: "DynamisAI Web <consulting@dynamisai.es>",
      to: "consulting@dynamisai.es",
      replyTo: email,
      subject: `[Web] ${safeSubject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0055e0;">Nuevo mensaje desde dynamisai.es</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px; width: 80px;"><strong>Nombre</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px;"><strong>Email</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px;"><strong>Asunto</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${safeSubject}</td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #e0eaf8;" />
          <p style="font-size: 14px; color: #0a1628; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #e0eaf8;" />
          <p style="font-size: 12px; color: #9ab0cc;">Puedes responder directamente a este email para contestar a ${safeName}.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
