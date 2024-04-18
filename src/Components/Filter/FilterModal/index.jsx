import React from 'react';

import { getUniqueShirtColors } from '@/Core/Helpers/getUniqueShirtColors';
import { DEFAULT_SIZE } from '@/Core/Constants/sizes';

import ShirtsContext from '@/Contexts/useShirtsContext';
import FilterShirts, { filterReducer } from '@/Contexts/useFilterShirts';

import * as Modal from '@/Components/Modal';
import * as OptionList from '@/Components/OptionList';
import * as Input from '@/Components/Input';
import { Button } from '@/Components/Button';

export function FilterModal() {
	const { filterStateApplied, applyFilters, clearFilters } =
		FilterShirts.useFilterShirts();

	const { shirts } = ShirtsContext.useShirts();

	const [filterState, setFilterState] = React.useReducer(
		filterReducer,
		filterStateApplied
	);

	const uniqueColors = getUniqueShirtColors(shirts);

	function handleNameChange(nameToFilter) {
		setFilterState({ nameToFilter });
	}

	function handleMinPriceChange(minPriceToFilter) {
		setFilterState({ minPriceToFilter });
	}

	function handleMaxPriceChange(maxPriceToFilter) {
		setFilterState({ maxPriceToFilter });
	}

	function handleColorSelection(selectedColor) {
		if (filterState.colors.includes(selectedColor)) {
			const colorsWithoutSelectedColor = filterState.colors.filter(
				(color) => color !== selectedColor
			);

			return setFilterState({ colors: colorsWithoutSelectedColor });
		}

		setFilterState({ colors: [...filterState.colors, selectedColor] });
	}

	function handleSizeSelection(selectedSize) {
		if (filterState.sizes.includes(selectedSize)) {
			const sizesWithoutSelectedColor = filterState.sizes.filter(
				(size) => size !== selectedSize
			);

			return setFilterState({ sizes: sizesWithoutSelectedColor });
		}

		setFilterState({ sizes: [...filterState.sizes, selectedSize] });
	}

	function handleApplyFilters() {
		applyFilters({
			name: filterState.nameToFilter,
			minPrice: filterState.minPriceToFilter,
			maxPrice: filterState.maxPriceToFilter,
			sizes: filterState.sizes,
			colors: filterState.colors,
		});

		Modal.close(Modal.FILTER_MODAL_ID);
	}

	function resetFilterStateToFilterApplied() {
		setFilterState(filterStateApplied);
	}

	function handleClearFilters() {
		clearFilters();

		Modal.close(Modal.FILTER_MODAL_ID);
	}

	React.useEffect(() => {
		setFilterState(filterStateApplied);
	}, [filterStateApplied]);

	return (
		<Modal.Modal
			id={Modal.FILTER_MODAL_ID}
			onBackgroundClose={resetFilterStateToFilterApplied}
		>
			<Modal.Card className='w-full h-full md:w-72 md:h-fit'>
				<Modal.Content className='gap-y-4'>
					<Modal.Header id={Modal.FILTER_MODAL_ID} title='Filtros' />

					<Input.Field>
						<Input.Label label='Nome' />

						<Input.Input
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='Ex: Camiseta Kine'
							onChange={handleNameChange}
							value={filterState.nameToFilter}
						/>
					</Input.Field>

					<Input.Field>
						<Input.Label label='Preço mínimo' />

						<Input.Input
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='R$ 0,00'
							onChange={handleMinPriceChange}
							value={filterState.minPriceToFilter}
						/>
					</Input.Field>

					<Input.Field>
						<Input.Label label='Preço máximo' />
						<Input.Input
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='R$ 20,00'
							onChange={handleMaxPriceChange}
							value={filterState.maxPriceToFilter}
						/>
					</Input.Field>

					<OptionList.SizesList
						data={DEFAULT_SIZE}
						onSelectSizes={handleSizeSelection}
						sizesSelected={filterState.sizes}
					/>

					<OptionList.ColorsList
						data={uniqueColors}
						onSelectColors={handleColorSelection}
						colorsSelected={filterState.colors}
					/>
				</Modal.Content>

				<Button className='mt-4' onClick={handleClearFilters}>
					Limpar Filtros
				</Button>

				<Button className='bg-orange-600' onClick={handleApplyFilters}>
					Filtrar
				</Button>
			</Modal.Card>
		</Modal.Modal>
	);
}
