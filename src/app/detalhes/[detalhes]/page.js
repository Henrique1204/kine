import { shirts } from '@/Data/shirts';

import { Head } from '@/Components/Head';
import { MainContent } from '@/Components/MainContent';

async function getData() {
	return {};
}

export default function Details() {
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
