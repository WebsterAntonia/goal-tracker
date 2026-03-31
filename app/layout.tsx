import "./globals.css";
import type { ReactNode } from "react";
import { AppProviders } from "@/components/AppProviders";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69c22f7b3c2c56b9bbd2f616" />
        <meta
          name="talentapp:project_verification"
          content="1d393b27df60af513024772a89c0ce6daa905e0ea4e95d24416bd0716544aad21410642b91bca764a5a19584d91744aa576cbc0f947033d57718e48166a3f525"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>goal-tracker</title>
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
