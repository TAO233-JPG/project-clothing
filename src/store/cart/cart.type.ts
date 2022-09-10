import { CategoryItemType } from '../categorise/categorise.type'

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'SET_CART_ITEMS',
  SET_IS_CART_OPEN = 'REOMVE_CART_ITEM',
}

export type CartItemType = CategoryItemType & {
  quantity: number
}
