import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AverageImages",
  description: "Created by next app",
  authors: [
    {
      name: "Qewertyy",
      url: "https://github.com/Qewertyy",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, minimum-scale=1, user-scalable=no,minimal-ui,viewport-fit=cover"
        />
        <meta name="renderer" content="webkit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      <body className={inter.className}>
        {children}
        <p className="text-center mb-3">
          Source -&gt;{" "}
          <a
            target="_blank"
            className=" text-blue-200 hover:underline"
            href="https://github.com/Qewertyy/AverageNews"
          >
            Github
          </a>
        </p>
      </body>
    </html>
  );
}
