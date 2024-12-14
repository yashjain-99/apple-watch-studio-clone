import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "@/context/StateProvider";
import CollectionModalStateProvider from "@/context/CollectionModalStateProvider";

export const metadata: Metadata = {
  title: "Create Your Apple Watch Series 10 Style - Apple",
  description: "Apple watch studio clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateProvider>
        <CollectionModalStateProvider>
          <body>{children}</body>
        </CollectionModalStateProvider>
      </StateProvider>
    </html>
  );
}
