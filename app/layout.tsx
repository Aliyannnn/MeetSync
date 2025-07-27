import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeetSync",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.ico",
          },
          variables: {
            colorText: "#ffffff",
            colorPrimary: "#4b5563",
            colorBackground: "#000000",
            colorInputBackground: "#1f2937",
            colorInputText: "#ffffff",
            colorDanger: "#dc2626",
            colorSuccess: "#16a34a",
            colorWarning: "#ca8a04",
            colorNeutral: "#6b7280",
          },
        }}
      >
        <body className={`${inter.className} bg-black`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
};