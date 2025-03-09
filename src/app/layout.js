import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "강남제신경과의원",
  description:
    "부산 수영구 수영역 도보 1분, 두통/수면장애/뇌졸중 전문 강남제신경과의원입니다.",
  openGraph: {
    title: "강남제신경과의원 | 두통 / 수면장애 / 뇌졸중 전문",
    description:
      "부산 수영구 수영역 도보 1분, 두통/수면장애/뇌졸중 전문 강남제신경과의원입니다.",
    url: "https://krrrrrg.github.io/hsp/",
    siteName: "강남제신경과의원",
    images: [
      {
        url: "https://krrrrrg.github.io/hsp/images/logo2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
