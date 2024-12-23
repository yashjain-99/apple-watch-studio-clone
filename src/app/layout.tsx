import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "@/context/StateProvider";
import FilterStateProvider from "@/context/FilterStateProvider";
import SwiperInstanceProvider from "@/context/SwiperInstanceProvider";

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
        <FilterStateProvider>
          <SwiperInstanceProvider>
            <body>{children}</body>
          </SwiperInstanceProvider>
        </FilterStateProvider>
      </StateProvider>
    </html>
  );
}
