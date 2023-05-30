'use client'

import { fetchApi } from '@/actions/api'
import { useEffect, useState } from 'react'

interface PlayersByTeamType {
  id: number
  name: string
  age: number
  photo: string
}

const getPlayersByTeam = (teamId: number, playerId: number, season: number) => {
  const [playersByTeamId, setplayersByTeamId] = useState<PlayersByTeamType[]>(
    []
  )
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiKey = localStorage.getItem('apiKey')

  useEffect(() => {
    fetchPlayers()
  }, [teamId, playerId, season])

  const fetchPlayers = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi(apiKey!, `players/squads?team=${teamId}`)

      if (res) {
        const players = res.response[0].players

        // A API-FOOTBALL limita em 10 acesso por segundo, por isso não consegui mostra a nacionalidade dos jogadores,
        // mas segue abaixo a função que buscaria a nacionalidade de cada jogador alem de outros dados.

        // let newListOfPlayers: any = []
        // const playerIndex = players.forEach(async (player: any, index: any) => {
        //   const newPlayer = await fetchApi(
        //     'a7fe0814aca3966df878cfcec7273dbe',
        //     `players?id=${player.id}&season=${season}`
        //   )

        //   console.log('newPlayer: ', newPlayer)
        //   newListOfPlayers = [...newListOfPlayers, newPlayer]
        // })

        setplayersByTeamId(players)
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    playersByTeamId,
  }
}

export default getPlayersByTeam
