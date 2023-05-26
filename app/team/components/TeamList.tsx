'use client'

import getCroutries from '@/actions/getCroutries'
import { FC, useState } from 'react'
import TeamItem from './TeamItem'
import Modal from '@/components/modais/Modal'
import { useSearchParams } from 'next/navigation'
import getTeamsByLeague from '@/actions/getTeamsByLeague'
import Select from '@/components/inputs/Select'
import getLeaguesByCountry from '@/actions/getLeaguesByCountry'
import getSeasons from '@/actions/getSeasons'
import useApiKey from '@/hooks/useApiKey'

interface TeamListProps {}

const TeamList: FC<TeamListProps> = ({}) => {
  useApiKey()
  const [isOpen, setIsOpen] = useState<boolean>()

  const searchParams = useSearchParams()
  const leagueName = searchParams.get('leagueName')
  const leagueId = searchParams.get('leagueId')
  const index = searchParams.get('index')
  const country = searchParams.get('country')

  const { seasons } = getSeasons(index!, country!)

  const date = new Date()
  const currentYear = date.getFullYear()

  const { teamsByLeague } = getTeamsByLeague(
    String(leagueId!),
    String(currentYear)
  )

  return (
    <>
      <div className=" p-8 pt-8">
        <div className="lg:ml-24">
          <h1 className="mb-16 md:mb-2 text-center lg:text-start text-slate-100 font-bold text-5xl">
            Times da {leagueName}
          </h1>
          <div className="flex justify-between gap-2">
            <h3 className="mb-16 md:mb-2 mt-2 text-center lg:text-start text-slate-400 font-bold">
              Temporada {currentYear}
            </h3>
            <Select label="Temporadas" />
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:grid-cols-3 md:gap-3 flex flex-col items-center">
          {teamsByLeague?.map((item) => (
            <TeamItem imgUrl={item.team?.logo} name={item.team.name} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TeamList
