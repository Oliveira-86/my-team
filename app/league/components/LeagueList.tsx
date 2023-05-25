'use client'

import getCroutries from '@/hooks/getCroutries'
import { FC, useState } from 'react'
import LeagueItem from './LeagueItem'
import Modal from '@/components/modais/Modal'
import getLeaguesByCountry from '@/hooks/getLeaguesByCountry'
import { useSearchParams } from 'next/navigation'

interface LeagueListProps {}

const LeagueList: FC<LeagueListProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>()

  const searchParams = useSearchParams()
  const { filteredByCountry } = getLeaguesByCountry(
    searchParams.get('name') as string
  )

  return (
    <>
      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>{}</Modal> */}
      <div className="lg:ml-24 pl-8 pt-8">
        <h1 className="mb-16 md:mb-2 text-center lg:text-start text-slate-100 font-bold text-5xl">
          Ligas
        </h1>
        <div className=" lg:grid lg:grid-cols-3 lg:gap-3 md:grid md:grid-cols-2 md:gap-3 flex flex-col items-center">
          {filteredByCountry?.map((item) => (
            <LeagueItem
              imgUrl={item.league?.logo}
              name={item.league?.name}
              type={item.league?.type}
              key={item.league?.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default LeagueList
