import { useDispatch, useSelector } from 'react-redux'

import Button from '../button/Button.component'

import { addItemToCart } from '../../store/cart/cart.action'
import './productCard.style.scss'
import { selectCartItems } from '../../store/cart/cart.select'
import { CategoryItemType } from '../../store/categorise/categorise.type'
import { FC } from 'react'

type ProductCardProps = {
  product: CategoryItemType
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addToCartHandle = (product: CategoryItemType) => {
    dispatch(addItemToCart(cartItems, product))
  }

  const { imageUrl, name, price } = product
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt='Product' />

      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addToCartHandle(product)}>
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
