'use client';

import * as Filter from '@/Components/Filter/BasicFilter';
import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';

export default function Home() {
	return (
		<MainContent>
			<Head>
				<title>Kine - Home</title>

				<meta
					name='description'
					content='Loja de Camisetas Kine, encontre a opção que melhor se molda ao seu corpo.'
				/>
			</Head>

			<Filter.FilterField />
		</MainContent>
	);
}
