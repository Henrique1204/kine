import React from 'react';

import { shirts as shirtsInitialData } from '@/Data/shirts';

const ShirtsContext = React.createContext(null);

export function ShirtsProvider({ children }) {
	const [isFetchingShirts, setIsFetchingShirts] = React.useState(true);

	const [isGettingShirtsDetails, setIsGettingShirtsDetails] =
		React.useState(false);

	const [shirts, setShirts] = React.useState([]);

	async function getShirtDetails(idToFind) {
		try {
			setIsGettingShirtsDetails(true);

			const shirtDetails = shirts.find((shirt) => shirt.id === idToFind);

			return shirtDetails;
		} catch (_) {
		} finally {
			setIsGettingShirtsDetails(false);
		}
	}

	async function preFetchShirts() {
		try {
			setIsFetchingShirts(true);

			setShirts(shirtsInitialData);
		} catch (_) {
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

				isFetchingShirts,
				isGettingShirtsDetails,

				getShirtDetails,
				updateShirts: setShirts,
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
