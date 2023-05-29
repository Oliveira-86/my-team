'use client'

import getCroutries from '@/actions/getCroutries'
import { FC, useState } from 'react'
import TeamItem from './TeamItem'
import Modal from '@/components/modais/Modal'
import { useRouter, useSearchParams } from 'next/navigation'
import getTeamsByLeague from '@/actions/getTeamsByLeague'
import Select from '@/components/inputs/Select'
import getLeaguesByCountry from '@/actions/getLeaguesByCountry'
import getSeasons from '@/actions/getSeasons'
import Link from 'next/link'
import useApiKey from '@/hooks/useApiKey'

interface TeamListProps {}

const TeamList: FC<TeamListProps> = ({}) => {
  useApiKey()
  const date = new Date()
  const currentYear = date.getFullYear()

  const [isOpen, setIsOpen] = useState<boolean>()
  const [seasonYear, setSeasonYear] = useState<string>(String(currentYear))

  const router = useRouter()
  const searchParams = useSearchParams()
  const leagueName = searchParams.get('leagueName')
  const leagueId = searchParams.get('leagueId')
  const index = searchParams.get('index')
  const country = searchParams.get('country')

  const { seasons } = getSeasons(index!, country!)

  const { teamsByLeague } = getTeamsByLeague(String(leagueId!), seasonYear)

  const sendData = (data: string) => {
    setSeasonYear(data)
  }

  return (
    <>
      <div className=" p-8 pt-8">
        <div className="lg:ml-24">
          <h1 className="mb-2 text-center lg:text-start text-slate-100 font-bold text-5xl">
            Times da {leagueName}
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-center lg:text-start text-slate-400 font-bold">
              Temporada {seasonYear}
            </h3>
            <div className="w-[200px] self-center md:self-auto">
              <Select
                label="Temporadas"
                list={seasons?.reverse()}
                sendData={sendData}
              />
            </div>
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:grid-cols-3 md:gap-3 flex flex-col items-center">
          {teamsByLeague?.map((item, key) => (
            <Link
              key={item.team.id}
              href={{
                pathname: `/team/${item.team.id}`,
                query: {
                  leagueId,
                  season: seasonYear,
                  teamId: item.team.id,
                },
              }}
            >
              <TeamItem
                imgUrl={item.team?.logo}
                name={item.team.name}
                key={item.team.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default TeamList
