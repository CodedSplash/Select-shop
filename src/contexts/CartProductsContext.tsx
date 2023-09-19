import { FC, ReactNode, createContext, useState } from 'react'
import { ICart } from '../models/Cart.interface'
import { IProduct } from '../models/Product.interface'
import { ICartProductsData } from '../models/CartProductsData.interface'

export interface ICartProductsContextProps {
	children: ReactNode
}

export const CartProductsDataContext = createContext<ICartProductsData>({
	cartProducts: [],
	handleCartProducts: () => {},
	handlePlusCartProduct: () => {},
	handleMinusCartProduct: () => {},
	handleDeleteCartProduct: () => {},
})

const CartProductsContext: FC<ICartProductsContextProps> = ({ children }) => {
	const [cartProducts, setCartProducts] = useState<ICart[]>([])

	const handleCartProducts = (product: IProduct) => {
		let isFind = false

		cartProducts.forEach((cartProduct, index) => {
			if (cartProduct.product.id === product.id) {
				isFind = true

				const newCartProduct: ICart = {
					product,
					quantity: cartProduct.quantity + 1,
					totalPrice: cartProduct.totalPrice + cartProduct.product.price,
				}

				setCartProducts((prev) => {
					const newArray = [...prev]

					newArray[index] = newCartProduct

					return newArray
				})
			}
		})

		if (!isFind) {
			const newCartProduct: ICart = {
				product,
				quantity: 1,
				totalPrice: product.price,
			}

			setCartProducts((prev) => [...prev, newCartProduct])
		}
	}

	const handlePlusCartProduct = (cartProduct: ICart) => {
		const index = cartProducts.indexOf(cartProduct)

		const newCartProduct: ICart = {
			product: cartProduct.product,
			quantity: cartProduct.quantity + 1,
			totalPrice: cartProduct.totalPrice + cartProduct.product.price,
		}

		setCartProducts((prev) => {
			const newArray = [...prev]

			newArray[index] = newCartProduct

			return newArray
		})
	}

	const handleMinusCartProduct = (cartProduct: ICart) => {
		const index = cartProducts.indexOf(cartProduct)

		const newCartProduct: ICart = {
			product: cartProduct.product,
			quantity: cartProduct.quantity === 1 ? 1 : cartProduct.quantity - 1,
			totalPrice:
				cartProduct.quantity === 1
					? cartProduct.product.price
					: cartProduct.totalPrice - cartProduct.product.price,
		}

		setCartProducts((prev) => {
			const newArray = [...prev]

			newArray[index] = newCartProduct

			return newArray
		})
	}

	const handleDeleteCartProduct = (cartProduct: ICart) => {
		setCartProducts((prev) =>
			prev.filter((product) => cartProduct.product.id !== product.product.id),
		)
	}

	const CartData: ICartProductsData = {
		cartProducts,
		handleCartProducts,
		handlePlusCartProduct,
		handleMinusCartProduct,
		handleDeleteCartProduct,
	}

	return (
		<CartProductsDataContext.Provider value={CartData}>
			{children}
		</CartProductsDataContext.Provider>
	)
}

export default CartProductsContext
