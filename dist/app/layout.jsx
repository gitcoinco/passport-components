import './globals.css';
import { Inter } from 'next/font/google';
import { Libre_Franklin } from 'next/font/google';
var libreFranklin = Libre_Franklin({ subsets: ['latin'] });
var inter = Inter({ subsets: ['latin'] });
export var metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>);
}
