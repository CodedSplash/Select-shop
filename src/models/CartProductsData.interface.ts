import { ICart } from './Cart.interface'
import { IProduct } from './Product.interface'

export interface ICartProductsData {
	cartProducts: ICart[]
	handleCartProducts: (product: IProduct) => void
	handlePlusCartProduct: (cartProduct: ICart) => void
	handleMinusCartProduct: (cartProduct: ICart) => void
	handleDeleteCartProduct: (cartProduct: ICart) => void
}
