import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legião Mirim de Bastos | Transformando jovens, construindo futuros",
  description: "Há mais de 22 anos formando adolescentes e jovens de Bastos/SP por meio do Programa de Aprendizagem Profissional.",
  keywords: ["aprendiz", "aprendizagem profissional", "bastos", "jovens", "legião mirim"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
