import './globals.css';

export const metadata = {
  title: 'Arcane E-commerce',
  description: 'Arcane merch e-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
