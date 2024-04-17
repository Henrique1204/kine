import React from 'react';

import { MdOutlineArrowBackIos } from 'react-icons/md';

import { ButtonIcon } from '@/Components/ButtonIcon';

export * from './constants';

export let open = (id) => {};
export let close = (idToClose) => {};

export function Header({ title, id }) {
	function handleCloseModal() {
		close(id);
	}

	return (
		<div className='w-full flex gap-x-4 items-center'>
			<ButtonIcon
				className='w-6 h-6 items-start justify-start'
				onClick={handleCloseModal}
			>
				<MdOutlineArrowBackIos size={20} className='text-gray-600' />
			</ButtonIcon>

			<h2 className='text-2xl text-gray-600'>{title}</h2>
		</div>
	);
}

export function Content({ children, className }) {
	return (
		<div className={`flex-1 flex flex-col p-6 ${className}`}>{children}</div>
	);
}

export function Card({ children, className }) {
	return (
		<div
			className={`overflow-hidden relative flex flex-col bg-white-200 shadow shadow-gray-400 rounded z-10 ${className}`}
		>
			{children}
		</div>
	);
}

export function Modal({ id, children }) {
	const [isVisible, setIsVisible] = React.useState(false);

	open = (idToOpen) => {
		setIsVisible(idToOpen === id);
	};

	close = (idToClose) => {
		if (idToClose === id) setIsVisible(false);
	};

	function generateStyle() {
		if (isVisible) {
			return '';
		}

		return 'hidden';
	}

	function handleClickInBackground() {
		setIsVisible(false);
	}

	return (
		<div
			className={`flex justify-center items-center fixed top-0 left-0 w-dvw h-dvh z-50 ${generateStyle()}`}
		>
			<div
				className='absolute w-full h-full bg-gray-50 top-0 left-0 z-0 cursor-pointer'
				onClick={handleClickInBackground}
			/>

			{children}
		</div>
	);
}
