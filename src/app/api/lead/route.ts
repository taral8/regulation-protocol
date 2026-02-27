import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const lead = {
      email,
      source: source || "unknown",
      timestamp: new Date().toISOString(),
    };

    // ConvertKit integration stub
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      try {
        await fetch(
          `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              api_key: process.env.CONVERTKIT_API_KEY,
              email,
              tags: [source],
            }),
          }
        );
      } catch {
        // ConvertKit failed, fall through to file storage
      }
    }

    // Dev: store to local JSON file
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "leads.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {
      // dir exists
    }

    let leads: typeof lead[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // file doesn't exist yet
    }

    leads.push(lead);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
