import { getShirtsList } from '@/Core/Services/shirts';

import { redirect } from 'next/navigation';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';
import { ProductDetails } from '@/Components/ProductDetails';
import { InternalHeader } from '@/Components/InternalHeader';

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

			<InternalHeader title='Voltar para Home' />

			<div className='flex flex-col gap-10 md:flex-row'>
				<img
					src={details.imageUrl}
					className='object-cover object-center w-full max-w-240 rounded flex-1 max-h-56 md:min-h-96 md:max-h-112 '
				/>

				<ProductDetails {...details} />
			</div>
		</MainContent>
	);
}
