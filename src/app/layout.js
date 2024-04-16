import { Inter } from 'next/font/google';

import { Header } from '@/Components/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				<Header />

				{children}
			</body>
		</html>
	);
}
