import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const MASKS = {
	currency: (maskOptions) => ({
		mask: createNumberMask({
			prefix: 'R$ ',
			suffix: '',
			includeThousandsSeparator: true,
			thousandsSeparatorSymbol: '.',
			allowDecimal: true,
			decimalSymbol: ',',
			decimalLimit: 2,
			integerLimit: 10,
			allowNegative: false,
			allowLeadingZeroes: false,
			...maskOptions,
		}),
		inputMode: 'numeric',
	}),
};

export const UNMASKS = {
	currency: (value) => {
		if (!value) return '';

		const valueWithoutCurrencyPrefix = value.toString().replace('R$ ', '');

		const valueWithCorrectComma = valueWithoutCurrencyPrefix
			.replace('.', '')
			.split(',');

		return Number(valueWithCorrectComma);
	},
};
