'use client';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';

import * as Filter from '@/Components/Filter';

import { ProductItem } from '@/Components/ProductItem';
import ShirtContext from '@/Contexts/useShirtsContext';

export default function Home() {
	const { shirtsFiltered } = ShirtContext.useShirts();

	const isEmptyShirtList = shirtsFiltered.length === 0;

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

			<div className='flex gap-8 flex-wrap justify-center mt-10'>
				{shirtsFiltered.map(({ imageUrl, ...shirt }) => (
					<ProductItem
						key={`product-item-${shirt.id}`}
						{...shirt}
						imageSrc={imageUrl}
					/>
				))}

				{isEmptyShirtList && (
					<h3 className='text-gray-600 text-md'>Nenhuma camisa encontrada</h3>
				)}
			</div>
		</MainContent>
	);
}
