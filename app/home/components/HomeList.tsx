'use client'

import getCroutries from '@/hooks/getCroutries'
import { FC, useState } from 'react'
import HomeItem from './HomeItem'
import Modal from '@/components/modais/Modal'
import getLeaguesByCountry from '@/hooks/getLeaguesByCountry'

interface HomeListProps {}

const HomeList: FC<HomeListProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>()

  const { countries } = getCroutries()

  return (
    <>
      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>{}</Modal> */}
      <div className="h-max lg:ml-24 pl-8 pt-8">
        <h1 className="text-center lg:text-start text-slate-100 font-bold text-5xl">
          Países
        </h1>
        <div className=" lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:grid-cols-3 md:gap-2 flex flex-col items-center">
          {countries?.map((item) => (
            <HomeItem
              imgUrl={item.flag}
              name={item.name}
              code={item.code}
              onClick={() => {}}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeList
