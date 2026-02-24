import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn Next Log',
  description: 'Learn Next Log',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
