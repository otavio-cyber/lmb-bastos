import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Legião Mirim de Bastos | Transformando jovens, construindo futuros",
  description: "Há mais de 24 anos formando adolescentes e jovens de Bastos/SP por meio do Programa de Aprendizagem Profissional.",
  keywords: ["aprendiz", "aprendizagem profissional", "bastos", "jovens", "legião mirim"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
