export class FilterShirts {
	constructor(shirts) {
		this.originalShirts = shirts;
		this.shirtsFiltered = shirts;
	}

	byName(nameToFilter) {
		if (typeof nameToFilter !== 'string' || nameToFilter.trim() === '') {
			return this;
		}

		const lowerCaseNameToFilter = nameToFilter.toLowerCase();

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return shirt.name.toLowerCase().includes(lowerCaseNameToFilter);
		});

		return this;
	}

	byMinPrice(minPriceToFilter) {
		if (typeof minPriceToFilter !== 'number' || minPriceToFilter < 0) {
			return this;
		}

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return shirt.price >= minPriceToFilter;
		});

		return this;
	}

	byMaxPrice(maxPriceToFilter) {
		if (typeof maxPriceToFilter !== 'number' || maxPriceToFilter < 0) {
			return this;
		}

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return shirt.price <= maxPriceToFilter;
		});

		return this;
	}

	bySizes(sizesToFilter) {
		if (!Array.isArray(sizesToFilter) || sizesToFilter.length === 0) {
			return this;
		}

		this.shirtsFiltered = this.shirtsFiltered.filter((shirt) => {
			return sizesToFilter.some((size) => {
				const sizesInLowerCase = shirt.sizes.map((size) => size.toLowerCase());

				return sizesInLowerCase.includes(size.toLowerCase());
			});
		});

		return this;
	}

	byColors(colorsToFilter) {
		if (!Array.isArray(colorsToFilter) || colorsToFilter.length === 0) {
			return this;
		}

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
