import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abhishek Verma | Full-Stack Developer",
  description: "Building high-performance mobile & web apps using Flutter and the MERN stack.",
  keywords: ["Abhishek Verma", "Full Stack Developer", "Flutter", "MERN", "Portfolio"],
  authors: [{ name: "Abhishek Verma" }],
  creator: "Abhishek Verma",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/bag.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
