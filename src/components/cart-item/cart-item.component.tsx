import { FC } from 'react'
import { CartItemType } from '../../store/cart/cart.type'
import './cart-item.style.scss'

type CartItemProps = {
  cartItem: CartItemType
}
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt='' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
