import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.select'
import { CartItemType } from '../../store/cart/cart.type'

import './checkout-item.style.scss'

type CheckoutItemProps = {
  cartItem: CartItemType
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const { imageUrl, name, quantity, price } = cartItem
  const cartItems = useSelector(selectCartItems)

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
