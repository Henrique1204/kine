import React from 'react';

export function ColorOption({ value, color, onSelect, isChecked }) {
	function handleSelectByClick() {
		onSelect(value);
	}

	function generateStyle() {
		if (isChecked) return 'scale-110 rotate-45 transition';

		return '';
	}

	return (
		<span
			onClick={handleSelectByClick}
			className={`rounded flex-1 min-w-5 min-h-5 max-w-5 max-h-5 cursor-pointer border border-gray-500 ${generateStyle()}`}
			style={{
				backgroundColor: color,
			}}
		/>
	);
}
