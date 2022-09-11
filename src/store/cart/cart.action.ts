import { CART_ACTION_TYPES, CartItemType } from './cart.type'
import { CategoryItemType } from '../categorise/categorise.type'
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils'

export type SetIsCartOpenType = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartItemType = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItemType[]>

// cart open
export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpenType => {
  return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool }
})

// update CartItem： add remove clear

// helperFn
const addCartItem = (cartItems: CartItemType[], productToAdd: CategoryItemType): CartItemType[] => {
  const hasExisted = cartItems.find((item) => item.id === productToAdd.id)

  if (hasExisted) {
    return cartItems.map((item) => (item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems: CartItemType[], producToRemove: CartItemType): CartItemType[] => {
  if (producToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== producToRemove.id)
  }

  return cartItems.map((item) =>
    item.id === producToRemove.id ? { ...producToRemove, quantity: producToRemove.quantity - 1 } : item,
  )
}

const clearCartItem = (cartItems: CartItemType[], itemToClear: CartItemType): CartItemType[] => {
  return cartItems.filter((item) => item.id !== itemToClear.id)
}

export const setCartItem = withMatcher(
  (cartItems: CartItemType[]): SetCartItemType => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
)

export const addItemToCart = (cartItems: CartItemType[], producToAdd: CategoryItemType) => {
  const newCartItems = addCartItem(cartItems, producToAdd)
  return setCartItem(newCartItems)
}

export const removeItemFromCart = (cartItems: CartItemType[], producToRemove: CartItemType) => {
  const newCartItems = removeCartItem(cartItems, producToRemove)
  return setCartItem(newCartItems)
}

export const clearItemFromCart = (cartItems: CartItemType[], itemToClear: CartItemType) => {
  const newCartItems = clearCartItem(cartItems, itemToClear)
  return setCartItem(newCartItems)
}
