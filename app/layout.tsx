import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rock, Paper, Scissors",
  description: "A browser-based Rock, Paper, Scissors game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Box flex={1} display="flex" flexDirection="column">
              {children}
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}