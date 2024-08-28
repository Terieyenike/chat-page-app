import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat page with OpenAI",
  description: "Get answers to all your questions in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <footer className='w-full flex flex-col sm:flex-row justify-center items-center bg-white py-4 border-t border-t-[#e6ebf4]'>
          <p className='text-gray-600 text-sm'>
            Built with Next, TypeScript, and OpenAI
          </p>
        </footer>
      </body>
    </html>
  );
}
