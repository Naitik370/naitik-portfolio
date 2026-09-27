import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const title = 'Naitik Jain | AI/ML Engineer';
const description =
  'Explore my network of AI projects, technical skills, research, and achievements. Building healthcare AI and financial intelligence in Mumbai.';
const origin = 'https://naitik-jain-portfolio.naitik370.chatgpt.site';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: origin,
    images: [
      {
        url: `${origin}/og.png`,
        width: 1730,
        height: 909,
        alt: 'Naitik Jain, AI / ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${origin}/og.png`],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
