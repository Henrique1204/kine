import React from 'react';

import { formatCurrencyBRL } from '@/Core/Utils/formatCurrencyBRL';

export function PriceTag({ price = 0 }) {
	return (
		<span className='block absolute right-negative-2 top-negative-2 rounded px-2 py-1 bg-orange-500 shadow shadow-100 text-white-100 font-bold'>
			{formatCurrencyBRL(price)}
		</span>
	);
}
