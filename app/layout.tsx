export const metadata = {
  title: 'Ravindra Bhati | Senior iOS Engineer',
  description: 'Senior iOS Engineer — Swift, SwiftUI, UIKit, Enterprise Mobile Architect — Ravindra Bhati'
};

import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
