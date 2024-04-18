'use client';

import { Inter } from 'next/font/google';

import { Header } from '@/Components/Header';

import ShirtsContext from '@/Contexts/useShirtsContext';
import FilterShirts from '@/Contexts/useFilterShirts';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				<Header />

				<ShirtsContext.Provider>
					<FilterShirts.Provider>{children}</FilterShirts.Provider>
				</ShirtsContext.Provider>
			</body>
		</html>
	);
}
