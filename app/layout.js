import { Comfortaa } from "next/font/google";
import "./globals.css";
import "./css.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Yan",
  description: "Take a look",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className + ' bg-white dark:bg-black text-black dark:text-white'}>{children}</body>
    </html>
  );
}
