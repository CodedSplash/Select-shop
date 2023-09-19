import { ICart } from '../models/Cart.interface'

export function totalPrice(cartProducts: ICart[]) {
	return cartProducts.reduce(
		(value, cartProduct: ICart) => cartProduct.totalPrice + value,
		0,
	)
}
