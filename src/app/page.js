'use client';

import { shirts } from '@/Data/shirts';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';

import * as Filter from '@/Components/Filter/BasicFilter';

import { ProductItem } from '@/Components/ProductItem';

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

			<ProductItem {...shirts[0]} imageSrc={shirts[0].imageUrl} />
		</MainContent>
	);
}
