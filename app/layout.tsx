import "./globals.css";
import type { ReactNode } from "react";
import { AppProviders } from "@/components/AppProviders";
import {
  APP_DESCRIPTION,
  APP_IMAGE_URL,
  APP_NAME,
  APP_TITLE,
  APP_URL,
  BASE_APP_ID,
  FC_FRAME_EMBED,
  FC_MINIAPP_EMBED,
} from "@/lib/base-app";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content={BASE_APP_ID} />
        <meta
          name="talentapp:project_verification"
          content="1d393b27df60af513024772a89c0ce6daa905e0ea4e95d24416bd0716544aad21410642b91bca764a5a19584d91744aa576cbc0f947033d57718e48166a3f525"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="theme-color" content="#0F766E" />
        <meta name="fc:miniapp" content={FC_MINIAPP_EMBED} />
        <meta name="fc:frame" content={FC_FRAME_EMBED} />
        <meta property="og:title" content={APP_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={APP_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={APP_TITLE} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content={APP_IMAGE_URL} />
        <link rel="canonical" href={APP_URL} />
        <title>{APP_NAME}</title>
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
