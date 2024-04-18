import React from 'react';

import { getUniqueShirtColors } from '@/Core/Helpers/getUniqueShirtColors';
import { DEFAULT_SIZE } from '@/Core/Constants/sizes';
import { UNMASKS } from '@/Core/Helpers/inputMasks';
import { applyFilterDTO } from '@/Core/Helpers/filterDto';

import ShirtsContext from '@/Contexts/useShirtsContext';
import FilterShirts, { filterReducer } from '@/Contexts/useFilterShirts';

import * as Modal from '@/Components/Modal';
import * as OptionList from '@/Components/OptionList';
import * as Input from '@/Components/Input';
import { Button } from '@/Components/Button';

import { PriceFilter } from '../PriceFilter';

export function FilterModal() {
	const [haveErrorInFilter, setHaveErrorInFilter] = React.useState(false);

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
		applyFilters(
			applyFilterDTO({
				...filterState,
				minPriceToFilter: UNMASKS.currency(filterState.minPriceToFilter),
				maxPriceToFilter: UNMASKS.currency(filterState.maxPriceToFilter),
			})
		);

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
							name='name'
							className='rounded shadow shadow-gray-200 w-full'
							placeholder='Ex: Camiseta Kine'
							onChange={handleNameChange}
							value={filterState.nameToFilter}
						/>
					</Input.Field>

					<PriceFilter
						minPriceValue={filterState.minPriceToFilter}
						maxPriceValue={filterState.maxPriceToFilter}
						onChangeMinPrice={handleMinPriceChange}
						onChangeMaxPrice={handleMaxPriceChange}
						onError={setHaveErrorInFilter}
					/>

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

				<Button
					className='bg-orange-600'
					onClick={handleApplyFilters}
					isDisabled={haveErrorInFilter}
				>
					Filtrar
				</Button>
			</Modal.Card>
		</Modal.Modal>
	);
}
