import React from 'react';

export function Button({ children, className, onClick, isDisabled }) {
	function generateStyle() {
		if (isDisabled) return 'bg-gray-300 cursor-not-allowed';

		return 'bg-orange-500 hover:bg-orange-700 cursor-pointer';
	}

	return (
		<button
			onClick={onClick}
			className={`outline-none transition text-white-100 py-3 uppercase font-bold ${className} ${generateStyle()}`}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
}
