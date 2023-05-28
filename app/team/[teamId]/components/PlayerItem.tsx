import Image from 'next/image'
import { FC } from 'react'

interface PlayerItemProps {
  name: string
  age: number
  src: string
}

const PlayerItem: FC<PlayerItemProps> = ({ name, age, src }) => {
  return (
    <div className="flex p-2 rounded-md w-full bg-secondary-black mb-2 gap-4 cursor-pointer hover:scale-105">
      <div>
        <Image
          width={50}
          height={50}
          alt="nationality"
          src={src}
          className="rounded-full "
        />
      </div>
      <div className="flex-col items-center">
        <p className="font-semibold text-slate-200">{name}</p>
        <div className="flex items-center gap-2">
          <p className="font-medium text-slate-500">{age}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerItem
