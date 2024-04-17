import React from 'react';

import { Button } from '@/Components/Button';
import * as OptionList from '@/Components/OptionList';

import { Card } from './Card';
import { PriceTag } from './PriceTag';
import { clearPreviewData } from 'next/dist/server/api-utils';

export function ProductItem({
	id,
	name,
	description,
	colors,
	sizes,
	price,
	imageSrc,
}) {
	const [sizeSelected, setSizeSelected] = React.useState('');
	const [colorSelected, setColorSelected] = React.useState('');

	function handleRedirectToDetails() {}

	function handleBuyProduct() {}

	return (
		<Card>
			<PriceTag price={price} />

			<img
				src={imageSrc}
				className='object-cover object-center h-44 w-full rounded-t'
			/>

			<h1 className='font-bold text-xl text-gray-600 text-center mt-4 mb-5'>
				{name}
			</h1>

			<p className='text-sm text-center text-gray-600 text-ellipsis overflow-hidden line-clamp-3 mx-4'>
				{description}
			</p>

			<div className='flex justify-between items-start mt-5 mx-4'>
				<OptionList.SizesList
					data={sizes}
					onSelectSize={setSizeSelected}
					sizeSelected={sizeSelected}
				/>

				<OptionList.ColorsList
					data={colors}
					onSelectColor={setColorSelected}
					colorSelected={colorSelected}
				/>
			</div>

			<Button
				className='mt-auto rounded-none'
				onClick={handleRedirectToDetails}
			>
				Ver Mais
			</Button>

			<Button className='rounded-b bg-orange-600' onClick={handleBuyProduct}>
				Comprar
			</Button>
		</Card>
	);
}
