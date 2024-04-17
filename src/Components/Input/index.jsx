import React from 'react';

export function Input({ className, placeholder, value, onChange }) {
	function handleOnChange({ target }) {
		onChange?.(target.value);
	}

	return (
		<input
			className={`flex-1 p-2 pr-12 bg-white-100 border-none placeholder:text-gray-400 text-gray-600 outline-none ${className}`}
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
