import React from 'react';

export function Button({ children, className }) {
	return (
		<button
			className={`bg-orange-500 hover:bg-orange-700 transition text-white-100 py-3 uppercase font-bold ${className}`}
		>
			{children}
		</button>
	);
}
