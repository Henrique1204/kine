import React from 'react';

export function Loader({ children, isLoading }) {
	if (isLoading) {
		return (
			<div className='flex gap-2 w-fit mx-auto my-8'>
				<div className='animate-bounce rounded-full w-3 h-3 bg-gray-600'></div>
				<div className='animate-bounce rounded-full w-3 h-3 bg-orange-600'></div>
				<div className='animate-bounce rounded-full w-3 h-3 bg-gray-600'></div>
			</div>
		);
	}

	return <>{children}</>;
}
