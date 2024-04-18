'use client';

import ShirtContext from '@/Contexts/useShirtsContext';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';
import { ProductItem } from '@/Components/ProductItem';
import { Loader } from '@/Components/Loader.jsx';

import * as Filter from '@/Components/Filter';

export default function Home() {
	const { shirtsFiltered, shirts, isFetchingShirts } = ShirtContext.useShirts();

	const isEmptyShirtList = shirtsFiltered.length === 0;
	const havaFilterApplied = shirtsFiltered.length < shirts.length;

	return (
		<MainContent>
			<Head>
				<title>Kine - Home</title>

				<meta
					name='description'
					content='Loja de Camisetas Kine, encontre a opção que melhor se molda ao seu corpo.'
				/>
			</Head>

			<Filter.FilterSearch />

			<Loader isLoading={isFetchingShirts}>
				{havaFilterApplied && (
					<h3 className='text-gray-600 text-sm underline mx-auto mt-6 w-fit text-center'>
						Itens Filtrados
					</h3>
				)}

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
			</Loader>
		</MainContent>
	);
}
