import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarPage from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "@/app/provider";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Store",
  description: "A nifty store created using TypeScript and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Providers>
          <NavbarPage />
          <Container className="my-10">{children}</Container>
        </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
