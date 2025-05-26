import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

const belleFair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${belleFair.variable} ${barlowCondensed.variable} antialiased`}
      >
        <NavBar />

        {children}
      </body>
    </html>
  );
}
