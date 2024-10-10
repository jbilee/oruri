import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/contexts/QueryProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오르리",
  description: "암장 정보는 오르리!",
  openGraph: {
    title: "필요한 암장 정보 다 있다!",
    siteName: "오르리",
    description: "암장 정보는 오르리!",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ClerkProvider>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
