import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'P Shalini — Creative Developer & Product Builder',
  description: 'Portfolio of P Shalini, a Computer Science and Design undergraduate building thoughtful software, workflow automation and digital products in Bengaluru.',
  openGraph: { title: 'P Shalini — Creative Developer & Product Builder', description: 'Building ideas into meaningful digital experiences.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
