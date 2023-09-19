import { FC } from 'react'
import { IconButton, Paper, Stack, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Remove } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { ICartItemProps } from './CartItem.interface'

const CartItem: FC<ICartItemProps> = ({
	cartProduct,
	handleDeleteCartProduct,
	handleMinusCartProduct,
	handlePlusCartProduct,
}) => {
	return (
		<Paper square={false} sx={{ padding: 2 }}>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Typography variant={'body1'}>{cartProduct.product.title}</Typography>
				<Stack direction={'row'}>
					<Stack
						direction={'row'}
						alignItems={'center'}
						spacing={1}
						sx={{ paddingLeft: 4 }}
					>
						<IconButton
							aria-label={'Добавить ещё один товар'}
							onClick={() => handlePlusCartProduct(cartProduct)}
						>
							<Add />
						</IconButton>
						<Typography variant={'body1'}>{cartProduct.quantity}</Typography>
						<IconButton
							aria-label={'Удалить один товар'}
							onClick={() => handleMinusCartProduct(cartProduct)}
						>
							<Remove />
						</IconButton>
					</Stack>
					<IconButton
						color={'error'}
						aria-label={'Удалить товар'}
						onClick={() => handleDeleteCartProduct(cartProduct)}
					>
						<Close />
					</IconButton>
				</Stack>
			</Stack>
		</Paper>
	)
}

export default CartItem
