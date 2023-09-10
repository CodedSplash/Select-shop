export function formatNumberIntoCurrency(value: number) {
	const formatter = new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
	})

	return formatter.format(value)
}
