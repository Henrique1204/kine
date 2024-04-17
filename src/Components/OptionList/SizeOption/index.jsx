import React from 'react';

export function SizeOption({ value, text, onSelect, isChecked, isDisabled }) {
	function handleSelectByClick() {
		if (!isDisabled) onSelect(value);
	}

	function generateStyle() {
		if (isDisabled) {
			return 'bg-white-200 text-gray-500 hover:bg-white-200 cursor-not-allowed';
		}

		if (isChecked) return 'bg-orange-700';

		return '';
	}

	return (
		<span
			onClick={handleSelectByClick}
			className={`rounded flex-1 max-w-6 max-h-6 p-1 cursor-pointer bg-orange-500 hover:bg-orange-700 text-white-100 text-xs flex items-center justify-center ${generateStyle()}`}
		>
			{text}
		</span>
	);
}
