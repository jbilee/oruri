import QueryProvider from "@/contexts/QueryProvider";
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
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
