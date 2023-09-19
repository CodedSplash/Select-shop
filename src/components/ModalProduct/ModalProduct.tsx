import { FC, useContext, useState } from 'react'
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	Grid,
	IconButton,
	Snackbar,
	Stack,
	Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import StarIcon from '@mui/icons-material/Star'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IModalProductProps } from './ModalProduct.interface'
import { CartProductsDataContext } from '../../contexts/CartProductsContext'
import { formatNumberIntoCurrency } from '../../utils/numberIntoCurrency'

const ModalProduct: FC<IModalProductProps> = ({
	product,
	handleClose,
	open,
}) => {
	const [openSnackbar, setOpenSnackbar] = useState(false)

	const { handleCartProducts } = useContext(CartProductsDataContext)

	const handleAddProduct = () => {
		handleCartProducts(product)
		handleOpenSnackbar()
	}

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false)
	}

	const handleOpenSnackbar = () => {
		setOpenSnackbar(true)
	}

	return (
		<>
			<Snackbar
				anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
				open={openSnackbar}
				onClose={handleCloseSnackbar}
				message='Товар добавлен в корзину'
				key={'bottom' + 'left'}
			/>

			<Dialog
				fullWidth={true}
				maxWidth={'md'}
				open={open}
				onClose={handleClose}
				aria-labelledby='product-dialog-title'
			>
				<DialogTitle sx={{ m: 0, p: 2 }} id='product-dialog-title'>
					Карточка товара
				</DialogTitle>
				<IconButton
					aria-label='закрыть'
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: 'grey',
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>
					<Stack direction={'column'} spacing={3}>
						<Grid container direction={'row'} columnGap={4} wrap={'nowrap'}>
							<Grid item xs={5}>
								<Box
									component={'img'}
									src={product.image.toString()}
									alt={product.title}
									sx={{ objectFit: 'contain', width: '100%', height: 270 }}
								/>
							</Grid>
							<Grid item xs={7}>
								<Stack direction={'column'} alignItems={'start'}>
									<Typography variant={'h5'} sx={{ marginBottom: 0.5 }}>
										{product.title}
									</Typography>
									<Typography gutterBottom variant={'subtitle2'}>
										Категория: {product.category}
									</Typography>
									<Stack
										direction={'row'}
										alignItems={'center'}
										spacing={0.5}
										sx={{ marginBottom: '6px' }}
									>
										<StarIcon fontSize={'medium'} sx={{ color: '#FFC659' }} />
										{product.rating.rate}
										<Box sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>
											({product.rating.count})
										</Box>
									</Stack>
									<Typography variant={'h6'} sx={{ marginBottom: 1 }}>
										{formatNumberIntoCurrency(product.price)}
									</Typography>
									<Button
										onClick={handleAddProduct}
										variant='contained'
										color='success'
										startIcon={<ShoppingCartIcon />}
									>
										Добавить в корзину
									</Button>
								</Stack>
							</Grid>
						</Grid>
						<Grid container direction={'column'}>
							<Typography variant={'h6'} component={'div'}>
								Описание
							</Typography>
							<Divider />
							<Typography variant={'body1'} sx={{ paddingTop: '6px' }}>
								{product.description}
							</Typography>
						</Grid>
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	)
}
export default ModalProduct
