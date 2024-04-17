import React from 'react';

import { DEFAULT_SIZE } from '@/Core/Constants/sizes';

import { ColorOption } from './ColorOption';
import { SizeOption } from './SizeOption';

export * from './ColorOption';
export * from './SizeOption';

export function OptionList({ data, render, label }) {
	return (
		<div>
			<h2 className='text-base'>{label}</h2>

			<div className='flex gap-x-1.5 gap-y-1 mt-2 flex-wrap'>
				{data.map(render)}
			</div>
		</div>
	);
}

export function SizesList({ keyId, data, onSelectSizes, sizesSelected = [] }) {
	return (
		<OptionList
			label='Tamanhos'
			data={DEFAULT_SIZE}
			render={(size) => (
				<SizeOption
					key={`${keyId}-${size}`}
					value={size.toLowerCase()}
					text={size.toUpperCase()}
					isChecked={sizesSelected.includes(size.toLowerCase())}
					isDisabled={!data.includes(size)}
					onSelect={onSelectSizes}
				/>
			)}
		/>
	);
}

export function ColorsList({
	keyId,
	data,
	onSelectColors,
	colorsSelected = [],
}) {
	return (
		<OptionList
			label='Cores'
			data={data}
			render={(color) => (
				<ColorOption
					key={`${keyId}-${color}`}
					value={color.toLowerCase()}
					color={color.toUpperCase()}
					text={color.toUpperCase()}
					isChecked={colorsSelected.includes(color.toLowerCase())}
					onSelect={onSelectColors}
				/>
			)}
		/>
	);
}
