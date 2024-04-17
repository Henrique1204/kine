import React from 'react';

export function ColorOption({ value, color, onSelect, isChecked }) {
	function handleSelectByClick() {
		onSelect(value);
	}

	function generateStyle() {
		if (isChecked) return 'scale-110 rotate-45 transition';

		return '';
	}

	console.log(color);

	return (
		<span
			onClick={handleSelectByClick}
			className={`rounded flex-1 w-5 h-5 cursor-pointer border border-gray-500 ${generateStyle()}`}
			style={{
				backgroundColor: color,
			}}
		/>
	);
}
