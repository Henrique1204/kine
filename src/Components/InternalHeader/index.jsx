'use client';

import React from 'react';

import { MdOutlineArrowBackIos } from 'react-icons/md';

import { ButtonIcon } from '@/Components/ButtonIcon';
import { useRouter } from 'next/navigation';

export function InternalHeader({ title }) {
	const router = useRouter();

	function handleGoBack() {
		router.back();
	}

	return (
		<div className='flex gap-2 items-center pb-6'>
			<ButtonIcon onClick={handleGoBack}>
				<MdOutlineArrowBackIos size={20} className='text-gray-600' />
			</ButtonIcon>

			<h3 className='text-lg text-gray-600'>{title}</h3>
		</div>
	);
}
