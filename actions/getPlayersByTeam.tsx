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

  useEffect(() => {
    fetchPlayers()
  }, [teamId, playerId, season])

  const fetchPlayers = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi(
        'a7fe0814aca3966df878cfcec7273dbe',
        `players/squads?team=${teamId}`
      )

      if (res) {
        const players = res.response[0].players
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
