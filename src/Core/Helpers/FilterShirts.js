import * as Validates from '@/Core/Helpers/validateTypes';

export class FilterShirts {
	constructor(shirts) {
		this.originalShirts = shirts;
		this.shirtsFiltered = shirts;
	}

	byName(nameToFilter) {
		const isInvalidName = Validates.validateIsInvalidString(nameToFilter);

		if (isInvalidName) return this;

		const lowerCaseNameToFilter = nameToFilter.toLowerCase();

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return shirt.name.toLowerCase().includes(lowerCaseNameToFilter);
		});

		return this;
	}

	byMinPrice(minPriceToFilter) {
		const isInvalidPrice =
			Validates.validateIsInvalidMinPrice(minPriceToFilter);

		if (isInvalidPrice) return this;

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return shirt.price >= minPriceToFilter;
		});

		return this;
	}

	byMaxPrice(maxPriceToFilter) {
		const isInvalidPrice =
			Validates.validateIsInvalidMaxPrice(maxPriceToFilter);

		if (isInvalidPrice) return this;

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return shirt.price <= maxPriceToFilter;
		});

		return this;
	}

	bySizes(sizesToFilter) {
		const isValidArray = Validates.validateIsEmptyArray(sizesToFilter);

		if (isValidArray) return this;

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return sizesToFilter.some((size) => {
				const sizesInLowerCase = shirt.sizes.map((size) => size.toLowerCase());

				return sizesInLowerCase.includes(size.toLowerCase());
			});
		});

		return this;
	}

	byColors(colorsToFilter) {
		const isValidArray = Validates.validateIsEmptyArray(colorsToFilter);

		if (isValidArray) return this;

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return colorsToFilter.some((color) => {
				const colorsInLowerCase = shirt.colors.map((color) =>
					color.toLowerCase()
				);

				return colorsInLowerCase.includes(color);
			});
		});

		return this;
	}

	getFilteredShirts() {
		return this.shirtsFiltered;
	}

	reset() {
		this.shirtsFiltered = this.originalShirts;

		return this;
	}
}
