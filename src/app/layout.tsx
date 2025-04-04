import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { TanStackProvider } from "./_components/tanstack_provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "MZIO",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster />
      </body>
    </html>
  );
}
