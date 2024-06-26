import React from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/Components/Button';
import * as OptionList from '@/Components/OptionList';

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
	const [isRedirecting, setIsRedirecting] = React.useState(false);
	const [sizeSelected, setSizeSelected] = React.useState([]);
	const [colorSelected, setColorSelected] = React.useState([]);

	const router = useRouter();

	function handlSizeSelection(sizeSelected) {
		setSizeSelected([sizeSelected]);
	}

	function handlColorSelection(colorSelected) {
		setColorSelected([colorSelected]);
	}

	function handleRedirectToDetails() {
		setIsRedirecting(true);

		router.push(`/detalhes/${id}`);
	}

	function handleBuyProduct() {}

	return (
		<Card>
			<PriceTag price={price} />

			<img
				src={imageSrc}
				className='object-cover object-center h-44 w-full rounded-t'
			/>

			<h1 className='font-bold text-xl text-gray-600 text-center mt-3 mb-3'>
				{name}
			</h1>

			<p className='text-sm text-center text-gray-600 text-ellipsis overflow-hidden line-clamp-3 mx-4'>
				{description}
			</p>

			<div className='flex justify-between items-start mt-5 mx-4'>
				<OptionList.SizesList
					keyId={`shirt-${id}`}
					data={sizes}
					onSelectSizes={handlSizeSelection}
					sizesSelected={sizeSelected}
				/>

				<OptionList.ColorsList
					keyId={`shirt-${id}`}
					data={colors}
					onSelectColors={handlColorSelection}
					colorsSelected={colorSelected}
				/>
			</div>

			<Button
				className='mt-auto rounded-none'
				onClick={handleRedirectToDetails}
				isDisabled={isRedirecting}
			>
				Ver Mais
			</Button>

			<Button className='rounded-b bg-orange-600' onClick={handleBuyProduct}>
				Comprar
			</Button>
		</Card>
	);
}
