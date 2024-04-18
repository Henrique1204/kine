import React from 'react';

import { UNMASKS } from '@/Core/Helpers/inputMasks';

import * as Input from '@/Components/Input';

export function PriceFilter({
	maxPriceValue,
	minPriceValue,
	onChangeMaxPrice,
	onChangeMinPrice,
	onError,
}) {
	const [isMinPriceBigThanMaxPrice, setIsMinPriceBigThanMaxPrice] =
		React.useState(false);

	function checkIfIsMinPriceBigThanMaxPrice() {
		const minPriceWithoutMask = UNMASKS.currency(minPriceValue);
		const maxPriceWithoutMask = UNMASKS.currency(maxPriceValue);

		const isMinPriceEmpty = minPriceWithoutMask === '';
		const isMaxPriceEmpty = maxPriceWithoutMask === '';

		if (isMinPriceEmpty || isMaxPriceEmpty) {
			return setIsMinPriceBigThanMaxPrice(false);
		}

		const _isMinPriceBigThanMaxPrice =
			minPriceWithoutMask > maxPriceWithoutMask;

		setIsMinPriceBigThanMaxPrice(_isMinPriceBigThanMaxPrice);

		onError?.(_isMinPriceBigThanMaxPrice);
	}

	function handleMinPriceChange(minPriceToFilter) {
		onChangeMinPrice?.(minPriceToFilter);
	}

	function handleMaxPriceChange(maxPriceToFilter) {
		onChangeMaxPrice?.(maxPriceToFilter);
	}

	React.useEffect(() => {
		onError?.(isMinPriceBigThanMaxPrice);
	}, [isMinPriceBigThanMaxPrice]);

	return (
		<>
			<Input.Field>
				<Input.Label label='Preço mínimo' />

				<Input.InputMoney
					name='minPrice'
					className='rounded shadow shadow-gray-200 w-full'
					placeholder='R$ 0,00'
					onChange={handleMinPriceChange}
					value={minPriceValue}
					haveError={isMinPriceBigThanMaxPrice}
					onFocus={() => setIsMinPriceBigThanMaxPrice(false)}
					onBlur={checkIfIsMinPriceBigThanMaxPrice}
				/>

				<Input.ErrorMessage
					haveError={isMinPriceBigThanMaxPrice}
					errorMessage='O valor mínimo não pode ser maior que o máximo'
				/>
			</Input.Field>

			<Input.Field>
				<Input.Label label='Preço máximo' />

				<Input.InputMoney
					name='maxPrice'
					className='rounded shadow shadow-gray-200 w-full'
					placeholder='R$ 20,00'
					onChange={handleMaxPriceChange}
					value={maxPriceValue}
					haveError={isMinPriceBigThanMaxPrice}
					onFocus={() => setIsMinPriceBigThanMaxPrice(false)}
					onBlur={checkIfIsMinPriceBigThanMaxPrice}
				/>

				<Input.ErrorMessage
					haveError={isMinPriceBigThanMaxPrice}
					errorMessage='O valor máximo não pode ser menor que o mínimo'
				/>
			</Input.Field>
		</>
	);
}
