'use client'

import Button from '../Button'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface SelectProps {
  label: string
  list?: string[]
  onCLick?: () => void
  disabled?: boolean
  sendData?: any
}

const Select: React.FC<SelectProps> = ({ label, list, sendData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClick = (year: string) => {
    sendData(year)
    setIsOpen((state) => !state)
  }

  return (
    <div className="relative z-[100] w-[200]">
      <Button secondary onClick={() => setIsOpen((state) => !state)} fullWidth>
        {label} <IoIosArrowDown size={20} />
      </Button>
      {isOpen && (
        <div
          className={`
            absolute
            top-[40px]         
            w-full 
            rounded-md
            translate
            duration-300
            border-slate-400 
            bg-primary-black
            border-[1px]
            ${isOpen ? 'translate-y-0 ease-in' : 'translate-y-full'}
            ${isOpen ? 'opacity-100 ease-in' : 'opacity-0'}
          `}
        >
          <ul className="translate">
            {list?.map((item) => (
              <li
                className="
                text-slate-100 
                text-center 
                py-1 
                cursor-pointer 
                hover:bg-secondary-black
                w-full 
                rounded-md
              "
                onClick={() => onClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Select
