import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cine Sena | Seu entretenimento sem limites',
  description: 'Filmes, séries, esportes e canais ao vivo em todos os seus dispositivos.',
  metadataBase: new URL('https://cinesena.example'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Cine Sena | Seu entretenimento sem limites', description: 'Solicite seu teste grátis e comece a assistir.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} antialiased`}>{children}</body></html>;
}
