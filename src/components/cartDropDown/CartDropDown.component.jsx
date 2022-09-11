import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Button from '../button/Button.component'
import CartItem from '../cart-item/cart-item.component'

import './cartDropDown.style.scss'
import { selectCartItems } from '../../store/cart/cart.select'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const gotoCheckoutHandle = () => {
    navigate('checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={gotoCheckoutHandle}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
