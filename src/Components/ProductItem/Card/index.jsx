import React from 'react';

export function Card({ children }) {
	return (
		<div className='relative flex flex-col bg-white-100 shadow shadow-gray-300 h-105 w-72 rounded'>
			{children}
		</div>
	);
}
