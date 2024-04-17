import React from 'react';

export function ButtonIcon({ children, className, ...props }) {
	return (
		<button
			className={`w-10 h-10 flex items-center justify-center transition border-none ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
