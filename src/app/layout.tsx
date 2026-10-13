
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "../styles/theme.css";
import "../styles/chatbox.css";
import "../styles/chat-header.css";
import "../styles/chat-message.css";
import "../styles/chat-messages.css";
import "../styles/chat-input.css";
import "../styles/welcome-screen.css";
import "../styles/typing-indicator.css";
import "../styles/chat-sidebar.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCS AI Assistant",
  description: "AI assistant for SCS Training & Development Center.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

