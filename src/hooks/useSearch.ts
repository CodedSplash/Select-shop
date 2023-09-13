import { IProduct } from './../models/Product.interface'
import { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

const useSearch = (products: IProduct[], searchText: string) => {
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

	const filteredProductsFunction = () => {
		if (searchText) {
			const filteredData = products.filter((product) =>
				product.title.toLowerCase().includes(searchText.trim().toLowerCase()),
			)

			setFilteredProducts(filteredData)
		} else if (products.length) {
			setFilteredProducts(products)
		}
	}

	useEffect(() => {
		setFilteredProducts(products)
	}, [products])

	useDebounce(filteredProductsFunction, searchText, 500)

	return filteredProducts
}

export default useSearch
