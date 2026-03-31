import { NextResponse } from "next/server";
import {
  APP_DESCRIPTION,
  APP_IMAGE_URL,
  APP_TAGLINE,
  APP_TITLE,
  APP_URL,
} from "@/lib/base-app";

export function GET() {
  const header = process.env.FARCASTER_HEADER;
  const payload = process.env.FARCASTER_PAYLOAD;
  const signature = process.env.FARCASTER_SIGNATURE;

  const manifest = {
    ...(header && payload && signature
      ? {
          accountAssociation: {
            header,
            payload,
            signature,
          },
        }
      : {}),
    miniapp: {
      version: "1",
      name: APP_TITLE,
      homeUrl: APP_URL,
      iconUrl: APP_IMAGE_URL,
      imageUrl: APP_IMAGE_URL,
      buttonTitle: "Open Goal Tracker",
      splashImageUrl: APP_IMAGE_URL,
      splashBackgroundColor: "#F8FAFC",
      subtitle: APP_TAGLINE,
      description: APP_DESCRIPTION,
      primaryCategory: "productivity",
      tags: ["goal", "progress", "tracking", "baseapp"],
    },
  };

  return NextResponse.json(manifest, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
