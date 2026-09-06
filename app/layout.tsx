import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexora Play | Filmes, séries e esportes',
  description: 'Filmes, séries, esportes e entretenimento em diversos dispositivos. Escolha seu plano e fale conosco pelo WhatsApp.',
  metadataBase: new URL('https://nexoraplay.example'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Nexora Play | Entretenimento do seu jeito', description: 'Escolha seu plano e comece a assistir.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} antialiased`}>{children}</body></html>;
}
