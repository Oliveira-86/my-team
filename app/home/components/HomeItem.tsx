import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface HomeItemProps {
  imgUrl: string | undefined
  name?: string | undefined
  code?: string | undefined
  onClick?: () => void
}

const HomeItem: FC<HomeItemProps> = ({ imgUrl, name, code, onClick }, key) => {
  return (
    <Link
      href={{
        pathname: '/league',
        query: {
          name,
        },
      }}
    >
      <div
        key={key}
        onClick={onClick}
        className="
          relative 
          flex 
          items-center 
          justify-center 
          lg:w-[140px] 
          lg:h-[140px] 
          md:w-[160px] 
          md:h-[160px] 
          w-[250px] 
          h-[200px] 
          ease-out-flex 
          cursor-pointer 
          sm:mt-6 
          hover:scale-105 
        "
      >
        <img
          src={imgUrl}
          alt="planet-04"
          className="
            absolute 
            w-full 
            h-full 
            fill 
            object-cover 
            rounded-[24px]
            cursor-pointer 
            transition
            
            "
        />
        <div className="absolute px-4 bottom-0 w-full h-[30%] bg-[rgba(0,0,0,0.6)]  rounded-b-[23px] flex flex-col justify-center">
          <p className="lg:text-sm font-bold text-white">{name}</p>
          <p className="lg:text-sm font-bold text-white">{code}</p>
        </div>
      </div>
    </Link>
  )
}

export default HomeItem
