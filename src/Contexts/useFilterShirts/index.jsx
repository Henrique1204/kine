import React from 'react';

import { FilterShirts } from '@/Core/Helpers/FilterShirts';

import ShirtsContext from '@/Contexts/useShirtsContext';

const FilterShirtsContext = React.createContext(null);

const filterStateInitialValues = {
	nameToFilter: '',
	minPriceToFilter: '',
	maxPriceToFilter: '',
	sizes: [],
	colors: [],
};

export function filterReducer(state, updates) {
	return { ...state, ...updates };
}

export function FilterShirtsProvider({ children }) {
	const [filterStateApplied, setFilterStateApplied] = React.useReducer(
		filterReducer,
		filterStateInitialValues
	);

	const { shirts, updateShirtsFiltered } = ShirtsContext.useShirts();

	const filter = new FilterShirts(shirts);

	function applyFilters({ name, minPrice, maxPrice, sizes, colors }) {
		setFilterStateApplied({
			nameToFilter: name,
			minPriceToFilter: minPrice,
			maxPriceToFilter: maxPrice,
			sizes: sizes,
			colors: colors,
		});

		filter
			.byName(name)
			.byMinPrice(minPrice)
			.byMaxPrice(maxPrice)
			.bySizes(sizes)
			.byColors(colors);

		const shirtsFiltered = filter.getFilteredShirts();

		updateShirtsFiltered(shirtsFiltered);
	}

	function clearFilters() {
		filter.reset();

		setFilterStateApplied(filterStateInitialValues);
		updateShirtsFiltered(shirts);
	}

	return (
		<FilterShirtsContext.Provider
			value={{
				filterStateApplied,

				applyFilters,
				clearFilters,
			}}
		>
			{children}
		</FilterShirtsContext.Provider>
	);
}

export default {
	Context: FilterShirtsContext,
	Provider: FilterShirtsProvider,
	useFilterShirts: () => React.useContext(FilterShirtsContext),
};
