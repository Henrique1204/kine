export const debounce = (callback, delay) => {
	let timer = null;

	const clearDebounce = () => {
		if (timer) {
			window.clearTimeout(timer);

			timer = null;
		}
	};

	const setDebounce = (...args) => {
		if (timer) timer = null;

		timer = window.setTimeout(() => {
			callback(...args);

			timer = null;
		}, delay);
	};

	return [setDebounce, clearDebounce];
};
