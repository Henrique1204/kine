import React from 'react';

import { ColorOption } from './ColorOption';
import { SizeOption } from './SizeOption';

export * from './ColorOption';
export * from './SizeOption';

export function OptionList({ data, render, label }) {
	return (
		<div>
			<h2 className='text-base'>{label}</h2>

			<div className='flex gap-x-1.5 mt-2'>{data.map(render)}</div>
		</div>
	);
}

export function SizesList({ data, onSelectSize, sizeSelected }) {
	const DEFAULT_SIZE = ['P', 'M', 'G'];

	return (
		<OptionList
			label='Tamanhos'
			data={DEFAULT_SIZE}
			render={(size, keyIndex) => (
				<SizeOption
					key={`${size}-${keyIndex}`}
					value={size.toLowerCase()}
					text={size.toUpperCase()}
					isChecked={sizeSelected === size.toLowerCase()}
					isDisabled={!data.includes(size)}
					onSelect={onSelectSize}
				/>
			)}
		/>
	);
}

export function ColorsList({ data, onSelectColor, colorSelected }) {
	return (
		<OptionList
			label='Cores'
			data={data}
			render={(color, keyIndex) => (
				<ColorOption
					key={`${color}-${keyIndex}`}
					value={color.toLowerCase()}
					color={color.toUpperCase()}
					text={color.toUpperCase()}
					isChecked={colorSelected === color.toLowerCase()}
					onSelect={onSelectColor}
				/>
			)}
		/>
	);
}
