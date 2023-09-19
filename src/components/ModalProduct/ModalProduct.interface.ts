import { IProduct } from '../../models/Product.interface'

export interface IModalProductProps {
	product: IProduct
	handleClose: () => void
	open: boolean
}
