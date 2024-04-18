import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { FaFilter, FaFilterCircleXmark } from 'react-icons/fa6';

import { debounce } from '@/Core/Utils/debounce';

import FilterShirts from '@/Contexts/useFilterShirts';

import { ButtonIcon } from '@/Components/ButtonIcon';

import * as Modal from '@/Components/Modal';
import { Input } from '@/Components/Input';

import { FilterModal } from '../FilterModal';

export function FilterField({}) {
	const [nameToFilter, setNameToFilter] = React.useState('');

	const { filterStateApplied, applyFilters, clearFilters } =
		FilterShirts.useFilterShirts();

	function handleOpenFilterModal() {
		Modal.open(Modal.FILTER_MODAL_ID);
	}

	function handleClearFilter() {
		clearFilters();
	}

	function handleApplyFilter() {
		applyFilters({ name: nameToFilter });
	}

	const [handleApplyFilterWithDebounce, clearDebounce] = debounce(
		handleApplyFilter,
		200
	);

	React.useEffect(() => {
		handleApplyFilterWithDebounce();

		return clearDebounce;
	}, [nameToFilter]);

	React.useEffect(() => {
		setNameToFilter(filterStateApplied.nameToFilter);
	}, [filterStateApplied.nameToFilter]);

	return (
		<>
			<div className='w-fit flex items-center mx-auto shadow shadow-gray-300 overflow-hidden rounded'>
				<div className='flex relative items-center max-w-60'>
					<Input
						name='basicName'
						placeholder='Filtrar por nome'
						value={nameToFilter}
						onChange={setNameToFilter}
					/>

					<FaSearch
						className={`absolute right-4 text-orange-500 text-inherit`}
						size={16}
					/>
				</div>

				<ButtonIcon
					className='bg-orange-600 hover:bg-orange-700'
					onClick={handleOpenFilterModal}
				>
					<FaFilter size={20} className='text-white-100' />
				</ButtonIcon>

				<ButtonIcon
					className='bg-orange-500 hover:bg-orange-700'
					onClick={handleClearFilter}
				>
					<FaFilterCircleXmark size={20} className='text-white-100' />
				</ButtonIcon>
			</div>

			<FilterModal />
		</>
	);
}
