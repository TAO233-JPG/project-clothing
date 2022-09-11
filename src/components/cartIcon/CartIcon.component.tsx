import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.select'

import { setIsCartOpen } from '../../store/cart/cart.action'

import './cartIcon.style.scss'

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleCartOpenHandle = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <div className='cart-icon-container' onClick={toggleCartOpenHandle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
