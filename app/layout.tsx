import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Vértice Representações Comerciais',
  description: 'Catálogo B2B para solicitação de cotações em hidráulica e materiais de construção - Angra dos Reis e Costa Verde RJ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
