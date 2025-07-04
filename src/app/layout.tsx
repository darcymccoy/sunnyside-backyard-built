import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunnyside Backyard Built',
  description: 'Local handyman services you can count on.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

