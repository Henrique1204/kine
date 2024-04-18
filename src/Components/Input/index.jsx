import React from 'react';

import MaskedInput from 'react-text-mask';

import { MASKS } from '@/Core/Helpers/inputMasks';

const INPUT_DEFAULT_CLASS_NAMES = `flex-1 p-2 pr-12 bg-white-100 border-none placeholder:text-gray-400 text-gray-600 outline-none`;

export function Input({ className, placeholder, value, onChange, ...props }) {
	function handleOnChange({ target }) {
		onChange?.(target.value);
	}

	return (
		<input
			{...props}
			className={`${INPUT_DEFAULT_CLASS_NAMES} ${className}`}
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

export function InputMoney({ onChange, className, value = '', ...props }) {
	function handleOnChange({ target }) {
		onChange?.(target.value);
	}

	React.useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<MaskedInput
			className={`${INPUT_DEFAULT_CLASS_NAMES} ${className}`}
			onChange={handleOnChange}
			value={value}
			defaultValue={value}
			{...MASKS.currency()}
			{...props}
		/>
	);
}
