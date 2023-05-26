import Image from 'next/image'
import { FC } from 'react'

interface leagueItemProps {
  imgUrl?: string
  name?: string
  type?: string
  onClick?: () => void
}

const TeamItem: FC<leagueItemProps> = (
  { imgUrl, name, type, onClick },
  key
) => {
  return (
    <div
      key={key}
      onClick={onClick}
      className="
      relative 
      flex 
      flex-col
      md:flex-col
      items-center  
      transition 
      lg:w-[300px] 
      lg:h-[120px] 
      md:w-[180px] 
      md:h-[120px] 
      w-[350px] 
      h-[250px] 
      ease-out-flex 
      cursor-pointer 
      sm:mt-6 
      rounded-md
      hover:scale-105
    "
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="lg:h-[75px] md:h-[75px] object-cover "
      />
      <p className="mt-2 lg:text-sm  md:text-xs font-bold text-white">{name}</p>
    </div>
  )
}

export default TeamItem
