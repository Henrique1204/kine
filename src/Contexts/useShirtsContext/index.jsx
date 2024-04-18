import React from 'react';

import { getShirtsList } from '@/Core/Services/shirts';

const ShirtsContext = React.createContext(null);

export function ShirtsProvider({ children }) {
	const [isFetchingShirts, setIsFetchingShirts] = React.useState(true);

	const [shirts, setShirts] = React.useState([]);
	const [shirtsFiltered, setShirtsFiltered] = React.useState([]);

	async function preFetchShirts() {
		try {
			setIsFetchingShirts(true);

			const shirtsList = await getShirtsList();

			setShirts(shirtsList);
			setShirtsFiltered(shirtsList);
		} catch (e) {
			console.log(e);
		} finally {
			setIsFetchingShirts(false);
		}
	}

	React.useEffect(() => {
		preFetchShirts();
	}, []);

	return (
		<ShirtsContext.Provider
			value={{
				shirts,
				shirtsFiltered,

				isFetchingShirts,
				updateShirtsFiltered: setShirtsFiltered,
			}}
		>
			{children}
		</ShirtsContext.Provider>
	);
}

export default {
	Context: ShirtsContext,
	Provider: ShirtsProvider,
	useShirts: () => React.useContext(ShirtsContext),
};
