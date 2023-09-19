import { IProduct } from '../../models/Product.interface.ts'

export interface IProductCardProps {
	product: IProduct
	addProduct: (product: IProduct) => void
}
