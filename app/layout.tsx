import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Vértice Representações Comerciais | Catálogo B2B',
  description: 'Conectando fabricantes e fornecedores industriais ao comércio varejista de materiais de construção, hidráulica, elétrica e acabamentos - Angra dos Reis e Costa Verde RJ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
