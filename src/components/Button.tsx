import  { FC, ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary',
    children : ReactNode,
    width? : 'w-fit' | 'w-full'
}

const Button:FC<ButtonProps> = ({children,variant,width='w-fit'}) => {
    let className = ""
    switch (variant) {
        case 'primary':
            className = "bg-primary text-white"
            break;
        case 'secondary':
            className = "bg-secondary text-white"
            break;
        default:
            className = "bg-primary text-white"
            break;
    }
  return (
    <button className={`${className} ${width} h-fit rounded-xl py-2 px-8`}>
      {children}
    </button>
  )
}

export default Button
