// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "./AppWrapper";
import WhatsAppButton from "@/components/whatsappButton";
import { ThemeConfig } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EOS Residence",
  description: "Find your ideal hostel today at EOS Residence!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeConfig dark={false} />
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
          cz-shortcut-listen="true"
        >
          <AppWrapper>{children}</AppWrapper>
          <WhatsAppButton />
        </body>
      </html>
    </>
  );
}
