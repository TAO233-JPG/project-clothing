import { FC } from 'react'
import { DirectoryCategory } from '../directory/directory.component'
import { useNavigate } from 'react-router-dom'

import './directoryItem.style.scss'

type DirectoryItemProps = {
  category: DirectoryCategory
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title, route } = category
  const onNavigationHandle = () => navigate(route)
  return (
    <div className='directory-container' onClick={onNavigationHandle}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
