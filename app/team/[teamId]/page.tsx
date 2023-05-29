'use client'

import Image from 'next/image'
import PlayerItem from './components/PlayerItem'
import FormationItem from './components/FormationItem'
import Chart from './components/Chart'
import { useSearchParams } from 'next/navigation'
import getTeamsById from '@/actions/getTeamsById'
import getPlayersByTeam from '@/actions/getPlayersByTeam'
import useApiKey from '@/hooks/useApiKey'

const Team = () => {
  useApiKey()
  const searchParams = useSearchParams()
  const teamId = searchParams.get('teamId')
  const leagueId = searchParams.get('leagueId')
  const season = searchParams.get('season')

  const { playersByTeamId } = getPlayersByTeam(
    Number(teamId),
    Number(leagueId),
    Number(season)
  )
  const { teamsById, goalsByMinute } = getTeamsById(
    Number(teamId),
    Number(leagueId),
    Number(season)
  )

  return (
    <div className="min-h-full bg-primary-black p-10 ">
      <div className=" mb-10">
        <div className="flex gap-3 items-center justify-center lg:justify-start">
          <Image
            width={80}
            height={80}
            alt="Escudo do time"
            src={teamsById?.team?.logo!}
          />
          <p className="text-slate-100 font-semibold text-3xl">
            {teamsById?.team?.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4">
        <div
          className="
              lg:w-[50%] 
              rounded-sm 
              flex
              flex-col
              items-center
              lg:items-start
              "
        >
          <h2 className="text-slate-200 text-lg lg:w-[50%] text-center font-semibold mb-2">
            {teamsById?.league?.name}
          </h2>
          <div
            className="
              flex 
              items-start 
              justify-evenly 
              w-[50%] 
              lg:bg-secondary-black 
              lg:w-[70%]
              border-[1px] 
              border-slate-500 
              py-1 
              px-2
              rounded-t-md"
          >
            <p className="text-slate-200 font-bold flex w-[30%] items-center justify-center">
              Vitória
            </p>
            <p className="text-slate-200 font-bold flex w-[30%] items-center justify-center">
              Empate
            </p>
            <p className="text-slate-200 font-bold flex w-[30%] items-center justify-center">
              Derrota
            </p>
            <p className="text-slate-200 font-bold flex w-[30%] items-center justify-center">
              Total
            </p>
          </div>
          <div
            className="
              flex 
              items-start 
              justify-around 
              w-[50%] 
              lg:w-[70%]
              lg:bg-primary-black 
              border-[1px] 
              border-slate-500 
              border-t-primary-black
              py-1 
              rounded-b-md"
          >
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              {teamsById?.fixtures?.wins?.total}
            </p>
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              {teamsById?.fixtures?.draws?.total}
            </p>
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              {teamsById?.fixtures?.loses?.total}
            </p>
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              {teamsById?.fixtures?.played?.total}
            </p>
          </div>
          <h2 className="mt-8 text-slate-200 text-lg lg:w-[50%] text-center font-semibold mb-2">
            Formation
          </h2>
          <div className="flex flex-col w-[50%] lg:w-[70%] items-center justify-center">
            <div className="w-[100%] rounded-sm">
              {teamsById?.lineups?.map(({ formation, played }, index) => (
                <FormationItem
                  formation={formation}
                  played={played}
                  isPar={index % 2 === 0}
                  index={index}
                  length={teamsById?.lineups?.length}
                />
              ))}
            </div>
          </div>
          <div className="h-[300px] mt-8 w-full flex item-center">
            <Chart goalsByMinute={goalsByMinute!} />
          </div>
        </div>

        <div className="lg:w-[50%] ">
          <h2 className="text-slate-200 text-xl lg:w-[50%] font-semibold mb-2">
            Jogadores
          </h2>
          <div className="w-full grid grid-cols-2 gap-y-2 gap-x-4">
            {playersByTeamId?.map((player) => (
              <PlayerItem
                name={player.name}
                age={player.age}
                src={player.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
