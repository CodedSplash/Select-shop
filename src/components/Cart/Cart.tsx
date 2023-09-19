import { FC, useState } from 'react'
import {
	Box,
	Button,
	Drawer,
	IconButton,
	Stack,
	Typography,
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material/'
import { ICartProps } from './Cart.interface.ts'
import CartItem from '../CartItem/CartItem.tsx'
import { formatNumberIntoCurrency } from '../../utils/numberIntoCurrency.ts'
import { totalPrice } from '../../utils/totalPrice.ts'

const Cart: FC<ICartProps> = ({
	cartProducts,
	handleDeleteCartProduct,
	handleMinusCartProduct,
	handlePlusCartProduct,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClose = () => {
		setIsOpen(false)
	}

	const handelOpen = () => {
		setIsOpen(true)
	}

	return (
		<>
			<IconButton
				color='primary'
				aria-label='Открыть корзину'
				size='large'
				onClick={handelOpen}
				sx={{ position: 'fixed', right: 10, bottom: 10 }}
			>
				<ShoppingCart />
			</IconButton>
			<Drawer anchor={'right'} open={isOpen} onClose={handleClose}>
				<Box sx={{ width: 650, height: '100%' }} role='presentation'>
					<Stack
						direction={'column'}
						justifyContent={'space-between'}
						sx={{ height: '100%', overflow: 'hidden' }}
					>
						<Stack
							spacing={2}
							direction={'column'}
							padding={2}
							sx={{ overflowX: 'auto' }}
						>
							{cartProducts.map((cartProduct) => (
								<CartItem
									key={cartProduct.product.id}
									cartProduct={cartProduct}
									handleDeleteCartProduct={handleDeleteCartProduct}
									handleMinusCartProduct={handleMinusCartProduct}
									handlePlusCartProduct={handlePlusCartProduct}
								/>
							))}
						</Stack>
						<Box padding={2}>
							<Typography variant={'body1'} gutterBottom>
								Всего: {formatNumberIntoCurrency(totalPrice(cartProducts))}
							</Typography>
							<Button
								variant={'contained'}
								color={'success'}
								size={'large'}
								fullWidth
							>
								Оформить заказ
							</Button>
						</Box>
					</Stack>
				</Box>
			</Drawer>
		</>
	)
}

export default Cart
