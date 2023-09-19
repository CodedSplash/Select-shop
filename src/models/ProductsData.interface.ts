import { IProduct } from './Product.interface'

export interface IProductsData {
	products: IProduct[]
	error: string
	loading: boolean
}
