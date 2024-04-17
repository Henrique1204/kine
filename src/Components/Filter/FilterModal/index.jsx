import React from 'react';

import { getUniqueShirtColors } from '@/Core/Helpers/getUniqueShirtColors';
import { DEFAULT_SIZE } from '@/Core/Constants/sizes';

import ShirtsContext from '@/Contexts/useShirtsContext';

import * as Modal from '@/Components/Modal';
import * as OptionList from '@/Components/OptionList';
import * as Input from '@/Components/Input';
import { Button } from '@/Components/Button';

export function FilterModal() {
	const { shirts } = ShirtsContext.useShirts();

	const uniqueColors = getUniqueShirtColors(shirts);

	function handleColorSelection(selectedColor) {}

	function handleSizeSelection(selectedSize) {}

	return (
		<Modal.Modal id={Modal.FILTER_MODAL_ID}>
			<Modal.Card className='w-full h-full md:w-72 md:h-fit'>
				<Modal.Content className='gap-y-4'>
					<Modal.Header id={Modal.FILTER_MODAL_ID} title='Filtros' />

					<Input.Field>
						<Input.Label label='Nome' />
						<Input.Input
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='Ex: Camiseta Kine'
						/>
					</Input.Field>

					<Input.Field>
						<Input.Label label='Preço mínimo' />
						<Input.Input
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='R$ 0,00'
						/>
					</Input.Field>

					<Input.Field>
						<Input.Label label='Preço máximo' />
						<Input.Input
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='R$ 20,00'
						/>
					</Input.Field>

					<OptionList.SizesList
						data={DEFAULT_SIZE}
						onSelectSizes={handleSizeSelection}
						sizesSelected={[]}
					/>

					<OptionList.ColorsList
						data={uniqueColors}
						onSelectColors={handleColorSelection}
						colorsSelected={[]}
					/>
				</Modal.Content>

				<Button className='mt-4'>Limpar Filtros</Button>
				<Button className='bg-orange-600'>Filtrar</Button>
			</Modal.Card>
		</Modal.Modal>
	);
}
