import { Bebas_Neue, Inter, Nunito_Sans } from "next/font/google";
import "@/global.css";

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
