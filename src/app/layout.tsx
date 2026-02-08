/*
  Next.js의 App Router 구조에서 모든 페이지의 공통 부모는 src/app/layout.tsx (또는 .js)입니다.
  테마 클래스(.light, .dark 등)는 이 최상위 요소에 적용되어야
  하위의 모든 컴포넌트가 CSS 변수(var(--color-primary))를 상속받아 색을 칠할 수 있습니다.
**/

import type { Metadata } from "next";
import "./globals.css";
import { Song_Myung } from "next/font/google";
import { MaterialThemeProvider } from "@mabooky/tailored-m3";

const songMyung = Song_Myung({
  weight: '400',
  variable: '--font-song-myung'
});

export const metadata: Metadata = {
  title: "Dev Log"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
        lang="en" 
        suppressHydrationWarning 
        className={songMyung.variable}>
        <body className="flex flex-col">
            <MaterialThemeProvider>
                {children}
            </MaterialThemeProvider>
        </body>
    </html>
  );
}
