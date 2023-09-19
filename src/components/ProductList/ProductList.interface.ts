import { IProduct } from '../../models/Product.interface'

export interface IProductListProps {
	products: IProduct[]
	addProduct: (product: IProduct) => void
}
