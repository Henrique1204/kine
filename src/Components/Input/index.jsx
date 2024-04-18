import React from 'react';

import MaskedInput from 'react-text-mask';

import { MASKS } from '@/Core/Helpers/inputMasks';

const INPUT_DEFAULT_CLASS_NAMES = `flex-1 p-2 pr-12 bg-white-100 placeholder:text-gray-400 text-gray-600 outline-none`;

export function Input({
	className,
	placeholder,
	value,
	onChange,
	haveError,
	...props
}) {
	function handleOnChange({ target }) {
		onChange?.(target.value);
	}

	function generateStyle() {
		if (haveError) return 'text-red-200 border-1';

		return 'border-none';
	}

	return (
		<input
			{...props}
			className={`${INPUT_DEFAULT_CLASS_NAMES} ${className} ${generateStyle()}`}
			placeholder={placeholder}
			value={value}
			onChange={handleOnChange}
		/>
	);
}

export function Label({ label, className }) {
	return <label className={`text-base mb-2 block ${className}`}>{label}</label>;
}

export function Field({ children, className }) {
	return <div className={` ${className}`}>{children}</div>;
}

export function InputMoney({
	onChange,
	className,
	value = '',
	haveError,
	...props
}) {
	function handleOnChange({ target }) {
		onChange?.(target.value);
	}

	function generateStyle() {
		if (haveError) return 'border-2 border-rose-500';

		return 'border-none';
	}

	return (
		<MaskedInput
			className={`${INPUT_DEFAULT_CLASS_NAMES} ${className} ${generateStyle()}`}
			onChange={handleOnChange}
			value={value}
			defaultValue={value}
			{...MASKS.currency()}
			{...props}
		/>
	);
}

export function ErrorMessage({ haveError, errorMessage }) {
	if (!haveError) return null;

	return <p className='text-rose-500 text-sm mt-2'>{errorMessage}</p>;
}
