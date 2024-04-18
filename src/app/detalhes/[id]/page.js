import { getShirtsList } from '@/Core/Services/shirts';

import { redirect } from 'next/navigation';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';
import { ProductDetails } from '@/Components/ProductDetails';

export async function getData(shirtId) {
	if (isNaN(shirtId)) redirect('/');

	const shirtsList = await getShirtsList();

	const shirt = shirtsList.find((shirt) => shirt.id === shirtId);

	if (!shirt) redirect('/');

	return shirt;
}

export default async function Details({ params }) {
	const details = await getData(Number(params.id));

	return (
		<MainContent>
			<Head>
				<title>Kine - {details.name}</title>

				<meta name='description' content={details.description} />
			</Head>

			<div className='flex gap-10'>
				<img
					src={details.imageUrl}
					className='object-cover object-center w-full max-w-240 rounded flex-1 min-h-96 max-h-112 '
				/>

				<ProductDetails {...details} />
			</div>
		</MainContent>
	);
}
