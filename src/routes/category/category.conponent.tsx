import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard.component'

import { selectCategoriesMap } from '../../store/categorise/categorise.select'

import styles from './category.module.scss'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2 className={styles['category-title']}>{category.toUpperCase()}</h2>
      <div className={styles['category-container']}>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </Fragment>
  )
}

export default Category
