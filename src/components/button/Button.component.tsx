import { ButtonHTMLAttributes, FC } from 'react'
import './button.style.scss'

export enum BUTTON_TYPE_CLASS {
  google = 'google-sign-in',
  inverted = 'inverted',
}

export type ButtonProps = {
  buttonType?: 'google' | 'inverted'
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, className, ...otherProps }) => {
  return (
    <button disabled={isLoading} className={`button-container ${buttonType && BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
