import { IProduct } from '../models/Product.interface'
import { useEffect, useState } from 'react'

const useSortProducts = (products: IProduct[], sortType: string) => {
	const [sortProducts, setSortProducts] = useState<IProduct[]>([])

	const sortProductsHandler = () => {
		if (sortType === 'title') {
			const sort = products.sort((a: IProduct, b: IProduct) =>
				a.title.localeCompare(b.title),
			)

			setSortProducts([...sort])
		}
		if (sortType === 'highPrice') {
			const sort = products.sort(
				(a: IProduct, b: IProduct) => b.price - a.price,
			)

			setSortProducts([...sort])
		}
		if (sortType === 'lowPrice') {
			const sort = products.sort(
				(a: IProduct, b: IProduct) => a.price - b.price,
			)

			setSortProducts([...sort])
		}
	}

	useEffect(() => {
		setSortProducts(products)
	}, [products])

	useEffect(() => {
		sortProductsHandler()
	}, [sortType, products])

	return sortProducts
}

export default useSortProducts
