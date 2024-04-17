export function getUniqueShirtColors(shirts) {
	const uniqueColorsSet = new Set();

	shirts.forEach((shirt) => {
		shirt.colors.forEach((color) => {
			uniqueColorsSet.add(color);
		});
	});

	return Array.from(uniqueColorsSet);
}
