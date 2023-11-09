import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "./episode/page";
import { Box } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Image Feed",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              flex: "25%",
              minHeight: "100vh",
              borderRight: "2px solid whiteSmoke",
            }}
          >
            <Sidebar />
          </Box>
          <Box
            sx={{
              flex: "75%",
              minHeight: "100vh",
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
