import React from 'react';

import { Button } from '@/Components/Button';

import { Card } from './Card';
import { PriceTag } from './PriceTag';

export function ProductItem({
	id,
	name,
	description,
	colors,
	sizes,
	price,
	imageSrc,
}) {
	const handleBuyProduct = () => {};

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

			<Button className='mt-auto rounded-b' onClick={handleBuyProduct}>
				Comprar
			</Button>
		</Card>
	);
}
