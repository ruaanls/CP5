import Header from "@/components/Header/Header";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "CP5",
  description: "Checkpoint5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
