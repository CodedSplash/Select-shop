import { ICart } from '../../models/Cart.interface'

export interface ICartProps {
	cartProducts: ICart[]
	handlePlusCartProduct: (cartProduct: ICart) => void
	handleMinusCartProduct: (cartProduct: ICart) => void
	handleDeleteCartProduct: (cartProduct: ICart) => void
}
