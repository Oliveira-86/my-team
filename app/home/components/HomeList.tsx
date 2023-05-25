'use client'

import getCroutries from '@/hooks/getCroutries'
import { FC } from 'react'
import HomeItem from './HomeItem'

interface HomeListProps {}

const HomeList: FC<HomeListProps> = ({}) => {
  const { countries } = getCroutries()
  console.log(countries)
  return (
    <div className="h-max lg:ml-24 pl-8 pt-8">
      <h1 className="text-center lg:text-start text-slate-100 font-bold text-5xl">
        Países
      </h1>
      <div className=" lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:grid-cols-3 md:gap-2 flex flex-col items-center">
        {countries?.map((item) => (
          <HomeItem imgUrl={item.flag} name={item.name} code={item.code} />
        ))}
      </div>
    </div>
  )
}

export default HomeList
