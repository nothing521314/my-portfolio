import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format message for Telegram (MarkdownV2)
    const text = [
      `📬 *Liên hệ mới từ Portfolio*`,
      ``,
      `👤 *Họ tên:* ${escapeMarkdown(name)}`,
      `📧 *Email:* ${escapeMarkdown(email)}`,
      subject?.trim()
        ? `📌 *Tiêu đề:* ${escapeMarkdown(subject)}`
        : null,
      ``,
      `💬 *Nội dung:*`,
      escapeMarkdown(message),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "MarkdownV2",
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("[Telegram API Error]", err);
      return NextResponse.json(
        { error: "Failed to send Telegram message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Escape special characters required by Telegram MarkdownV2
 * https://core.telegram.org/bots/api#markdownv2-style
 */
function escapeMarkdown(text: string): string {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}
