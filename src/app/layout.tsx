import Header from "@/components/Header/Header";
import Rodape from "@/components/Rodape/Rodape";
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
        <Rodape/>
      </body>
    </html>
  );
}
