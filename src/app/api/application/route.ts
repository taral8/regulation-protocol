import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, goal, obstacle } = body;

    if (!name || !email || !goal || !obstacle) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const application = {
      name,
      email,
      goal,
      obstacle,
      timestamp: new Date().toISOString(),
    };

    // ConvertKit integration stub
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_APPLICATION_FORM_ID) {
      try {
        await fetch(
          `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_APPLICATION_FORM_ID}/subscribe`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              api_key: process.env.CONVERTKIT_API_KEY,
              email,
              first_name: name,
              tags: ["1:1-application"],
              fields: { goal, obstacle },
            }),
          }
        );
      } catch {
        // ConvertKit failed, fall through to file storage
      }
    }

    // Dev: store to local JSON file
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "applications.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {
      // dir exists
    }

    let applications: typeof application[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      applications = JSON.parse(existing);
    } catch {
      // file doesn't exist yet
    }

    applications.push(application);
    await fs.writeFile(filePath, JSON.stringify(applications, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
