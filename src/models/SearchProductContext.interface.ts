import { ChangeEvent } from 'react'
import { IProduct } from './Product.interface'

export interface ISearchProduct {
	filteredProducts: IProduct[]
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
