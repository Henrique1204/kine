import React from 'react';

import { IoMdSend } from 'react-icons/io';
import { FaFilter, FaFilterCircleXmark } from 'react-icons/fa6';

import { ButtonIcon } from '@/Components/ButtonIcon';

import * as Modal from '@/Components/Modal';
import { Input } from '@/Components/Input';

import { FilterModal } from '../FilterModal';

export function FilterField({}) {
	function handleOpenFilterModal() {
		Modal.open(Modal.FILTER_MODAL_ID);
	}

	function handleClearFilter() {}

	return (
		<>
			<div className='w-fit flex items-center mx-auto shadow shadow-gray-300 overflow-hidden rounded'>
				<div className='flex relative items-center max-w-60'>
					<Input placeholder='Filtrar por nome' />

					<ButtonIcon className='hover:scale-110 absolute right-0 text-orange-500 hover:text-orange-700'>
						<IoMdSend className='text-inherit transition' size={24} />
					</ButtonIcon>
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
