import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'London Cycling Companion',
  description: 'See cycleways, safe routes, and more in London',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
