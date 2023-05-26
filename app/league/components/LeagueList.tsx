'use client'

import getCroutries from '@/actions/getCroutries'
import { FC, useState } from 'react'
import LeagueItem from './LeagueItem'
import Modal from '@/components/modais/Modal'
import getLeaguesByCountry from '@/actions/getLeaguesByCountry'
import { useRouter, useSearchParams } from 'next/navigation'
import getTeamsByLeague from '@/actions/getTeamsByLeague'
import Link from 'next/link'
import { SeasonsType } from '@/libs/types'
import useApiKey from '@/hooks/useApiKey'

interface LeagueListProps {}

const LeagueList: FC<LeagueListProps> = ({}) => {
  useApiKey()
  const [isOpen, setIsOpen] = useState<boolean>()

  const router = useRouter()
  const searchParams = useSearchParams()
  const countryName = searchParams.get('name')
  const { filteredByCountry } = getLeaguesByCountry(countryName as string)

  const seasonsList = filteredByCountry.map((item) => item.seasons)

  return (
    <>
      <div className="lg:ml-24 pl-8 pt-8">
        <h1 className="mb-16 md:mb-2 text-center lg:text-start text-slate-100 font-bold text-5xl">
          Ligas
        </h1>
        <div className=" lg:grid lg:grid-cols-3 lg:gap-3 md:grid md:grid-cols-2 md:gap-3 flex flex-col items-center">
          {filteredByCountry?.map((item, index) => {
            const seasons = seasonsList[index]?.map((item) => String(item.year))

            return (
              <Link
                href={{
                  pathname: '/team',
                  query: {
                    leagueId: item.league?.id,
                    leagueName: item.league?.name,
                    index: index,
                    country: item.country?.name,
                  },
                }}
              >
                <LeagueItem
                  imgUrl={item.league?.logo}
                  name={item.league?.name}
                  type={item.league?.type}
                  key={item.league?.id}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LeagueList
