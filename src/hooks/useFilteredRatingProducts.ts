import { IProduct } from '../models/Product.interface'
import { useEffect, useState } from 'react'

const useFilteredRatingProducts = (
	products: IProduct[],
	filteredType: string,
) => {
	const [filteredRatingProducts, setFilteredRatingProducts] = useState<
		IProduct[]
	>([])

	const sortProductsHandler = () => {
		if (filteredType === 'all') {
			setFilteredRatingProducts(products)
		}
		if (filteredType === 'rate1') {
			const filter = products.filter((a: IProduct) =>
				a.rating.rate >= 1 && a.rating.rate < 2 ? true : false,
			)

			setFilteredRatingProducts(filter)
		}
		if (filteredType === 'rate2') {
			const filter = products.filter((a: IProduct) =>
				a.rating.rate >= 2 && a.rating.rate < 3 ? true : false,
			)

			setFilteredRatingProducts(filter)
		}
		if (filteredType === 'rate3') {
			const filter = products.filter((a: IProduct) =>
				a.rating.rate >= 3 && a.rating.rate < 4 ? true : false,
			)

			setFilteredRatingProducts(filter)
		}
		if (filteredType === 'rate4') {
			const filter = products.filter((a: IProduct) =>
				a.rating.rate >= 4 && a.rating.rate < 5 ? true : false,
			)

			setFilteredRatingProducts(filter)
		}
		if (filteredType === 'rate5') {
			const filter = products.filter((a: IProduct) =>
				a.rating.rate === 5 ? true : false,
			)

			setFilteredRatingProducts(filter)
		}
	}

	useEffect(() => {
		setFilteredRatingProducts(products)
	}, [products])

	useEffect(() => {
		sortProductsHandler()
	}, [filteredType, products])

	return filteredRatingProducts
}

export default useFilteredRatingProducts
