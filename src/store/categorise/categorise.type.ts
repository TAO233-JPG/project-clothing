export enum CATEGORIES_ACTION_TYPES {
  // SET_CATEGORIES = "categories/SET_CATEGORIES",
  FETCH_CATEGORISE_START = "categories/FETCH_CATEGORISE_START",
  FETCH_CATEGORISE_SUCCESS = "categories/FETCH_CATEGORISE_SUCCESS",
  FETCH_CATEGORISE_ERROR = "categories/FETCH_CATEGORISE_ERROR",
}

export type CategoryItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
};

export type CategoryType = {
  title: string;
  imageUrl: string;
  items: CategoryItemType[];
};

export type CategoryMapType = {
  [key: string]: CategoryItemType[];
};
