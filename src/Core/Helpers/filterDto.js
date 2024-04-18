export function applyFilterDTO({
	nameToFilter,
	minPriceToFilter,
	maxPriceToFilter,
	sizes,
	colors,
}) {
	return {
		name: nameToFilter,
		minPrice: minPriceToFilter,
		maxPrice: maxPriceToFilter,
		sizes,
		colors,
	};
}
