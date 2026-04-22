import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }

    await resend.emails.send({
      from: "DynamisAI Web <consulting@dynamisai.es>",
      to: "consulting@dynamisai.es",
      replyTo: email,
      subject: `[Web] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0055e0;">Nuevo mensaje desde dynamisai.es</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px; width: 80px;"><strong>Nombre</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px;"><strong>Email</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4a6080; font-size: 14px;"><strong>Asunto</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #0a1628;">${subject}</td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #e0eaf8;" />
          <p style="font-size: 14px; color: #0a1628; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #e0eaf8;" />
          <p style="font-size: 12px; color: #9ab0cc;">Puedes responder directamente a este email para contestar a ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }
}
