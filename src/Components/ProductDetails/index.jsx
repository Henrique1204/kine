'use client';

import React from 'react';

import { formatCurrencyBRL } from '@/Core/Utils/formatCurrencyBRL';

import { Button } from '@/Components/Button';
import * as OptionList from '@/Components/OptionList';

export function ProductDetails({
	id,
	name,
	description,
	colors,
	sizes,
	price,
}) {
	const [sizeSelected, setSizeSelected] = React.useState([]);
	const [colorSelected, setColorSelected] = React.useState([]);

	function handlSizeSelection(sizeSelected) {
		setSizeSelected([sizeSelected]);
	}

	function handlColorSelection(colorSelected) {
		setColorSelected([colorSelected]);
	}

	function handleBuyProduct() {}

	return (
		<div className='flex min-w-80 max-w-96 flex-col gap-8'>
			<h1 className='text-3xl font-bold text-gray-600 text-start'>{name}</h1>

			<p className='text-lg text-gray-600'>{description}</p>

			<div className='flex justify-start items-start gap-6'>
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

			<div className='flex flex-col gap-4 mt-auto'>
				<h2 className='text-2xl text-gray-600 font-bold text-center'>
					{formatCurrencyBRL(price)}
				</h2>

				<Button className='rounded bg-orange-600' onClick={handleBuyProduct}>
					Comprar
				</Button>
			</div>
		</div>
	);
}
