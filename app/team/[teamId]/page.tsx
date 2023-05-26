import Button from '@/components/Button'
import Select from '@/components/inputs/Select'
import Image from 'next/image'
import { FC } from 'react'
import PlayerItem from './components/PlayerItem'
import FormationItem from './components/FormationItem'
import { Chart } from './components/Chart'

interface TeamProps {}

const seasons = ['2018', '2019', '2020', '2021', '2022', '2023']
const players = [
  {
    name: 'Neymar Junior',
    age: 33,
    nationality: 'Brazil',
  },
  {
    name: 'Lionel Messi',
    age: 36,
    nationality: 'Argetina',
  },
  {
    name: 'Vinicius Junior',
    age: 22,
    nationality: 'Brazil',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
  {
    name: 'Jack Grealish',
    age: 23,
    nationality: 'Gales',
  },
]
const formations = [
  {
    formation: '4-2-3-1',
    played: 22,
  },
  {
    formation: '4-4-2',
    played: 13,
  },
  {
    formation: '3-5-2',
    played: 3,
  },
  {
    formation: '4-3-3',
    played: 16,
  },
]

const Team: FC<TeamProps> = ({}) => {
  return (
    <div className="min-h-full bg-primary-black p-10 ">
      <div className="flex gap-3 items-center justify-between mb-10">
        <div className="flex gap-3 items-center justify-center lg:justify-start">
          <Image
            width={80}
            height={80}
            alt="Escudo do time"
            src="https://media.api-sports.io/football/teams/33.png"
          />
          <p className="text-slate-100 font-semibold lg:text-3xl">
            Manchester United
          </p>
        </div>
        <Select label="Temporadas" list={seasons} />
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="lg:w-[50%] rounded-sm">
          <h2 className="text-slate-200 text-lg lg:w-[50%] text-center font-semibold mb-2">
            Premier League
          </h2>
          <div
            className="
              flex 
              items-start 
              justify-evenly 
              w-[50%] 
              lg:bg-secondary-black 
              border-[1px] 
              border-slate-500 
              py-1 
              px-2
              rounded-t-md

              "
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
              lg:bg-primary-black 
              border-[1px] 
              border-slate-500 
              border-t-primary-black
              py-1 
              rounded-b-md"
          >
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              20
            </p>
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              11
            </p>
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              13
            </p>
            <p className="text-slate-200  font-normal w-[30%] flex items-center justify-center">
              44
            </p>
          </div>
          <h2 className="mt-8 text-slate-200 text-lg lg:w-[50%] text-center font-semibold mb-2">
            Formation
          </h2>
          <div className="lg:w-[100%] rounded-sm ">
            {formations.map(({ formation, played }, index) => (
              <FormationItem
                formation={formation}
                played={played}
                isPar={index % 2 === 0}
                index={index}
                length={formations.length}
              />
            ))}
          </div>
          <div className="pr-8 h-[300px] mt-8">
            <Chart />
          </div>
        </div>

        <div className="lg:w-[50%] flex items-end">
          <div className="w-full grid grid-cols-2 gap-2">
            {players.map((player) => (
              <PlayerItem
                name={player.name}
                age={player.age}
                nationality={player.nationality}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
