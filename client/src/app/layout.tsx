import { Inter, Jaro } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jaro = Jaro({ subsets: ['latin'], variable: '--font-jaro' });

export const metadata = {
  title: 'Vescavia - Brand Scaling Agency',
  description: 'From Bold Ideas to Bold Brands',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jaro.variable}`}>{children}</body>
    </html>
  );
}
