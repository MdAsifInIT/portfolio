import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import { personalInfo } from '@/data/mock';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  openGraph: {
    type: 'website',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
  }
};

export const viewport = {
  themeColor: '#2563eb',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <Providers>
          <div className="App transition-colors duration-300">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
