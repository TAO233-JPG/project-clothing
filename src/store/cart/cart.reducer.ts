import { AnyAction } from 'redux'
import { setIsCartOpen, setCartItem } from './cart.action'
import { CartItemType } from './cart.type'

export type cartStateType = {
  readonly isCartOpen: Boolean
  readonly cartItems: CartItemType[]
}

const INITIAL_STATE: cartStateType = {
  isCartOpen: false,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action: AnyAction): cartStateType => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }

  if (setCartItem.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    }
  }

  return state
}

export default cartReducer
