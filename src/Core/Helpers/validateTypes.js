export function validateIfIsNull(value) {
	const isNull = value === null;
	const isUndefined = value === undefined;
	const isEmptyObject = Object.keys(value || {}).length === 0;

	return isNull || isUndefined || isEmptyObject;
}

export function validateIsInvalidString(value) {
	const isNotString = typeof value !== 'string';
	const isEmptyText = value.trim() === '';
	const isNull = validateIfIsNull(value);

	return isNotString || isEmptyText || isNull;
}

export function validateIsInvalidMinPrice(value) {
	const isNotNumber = typeof value !== 'number';
	const isLessThanZero = value < 0;
	const isNullValue = validateIfIsNull(value);

	return isNotNumber || isLessThanZero || isNullValue;
}

export function validateIsInvalidMaxPrice(value) {
	const isNotNumber = typeof value !== 'number';
	const isLessThanZero = value <= 0;
	const isNullValue = validateIfIsNull(value);

	return isNotNumber || isLessThanZero || isNullValue;
}

export function validateIsEmptyArray(value = []) {
	const isNotArray = !Array.isArray(value);
	const isEmptyArray = value.length === 0;
	const isNullValue = validateIfIsNull(value);

	return isNotArray || isEmptyArray || isNullValue;
}
