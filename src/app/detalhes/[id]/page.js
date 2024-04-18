import { getShirtsList } from '@/Core/Services/shirts';

import { notFound } from 'next/navigation';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';

export async function getData(shirtId) {
	if (isNaN(shirtId)) notFound();

	const shirtsList = await getShirtsList();

	const shirt = shirtsList.find((shirt) => shirt.id === shirtId);

	if (!shirt) notFound();

	return shirt;
}

export default async function Details({ params }) {
	const details = await getData(Number(params.id));

	console.log(details);

	return (
		<MainContent>
			<Head>
				<title>Kine - Detalhes</title>

				<meta
					name='description'
					content='Loja de Camisetas Kine, encontre a opção que melhor se molda ao seu corpo.'
				/>
			</Head>
		</MainContent>
	);
}
