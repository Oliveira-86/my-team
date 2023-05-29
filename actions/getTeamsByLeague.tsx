'use client'

import { fetchApi } from '@/actions/api'
import { useEffect, useState } from 'react'
import { TeamType, VenueType } from '@/libs/types'

interface TeamByLeagueType {
  team: TeamType
  venue: VenueType
}

const getTeamsByLeague = (league: string, season: string) => {
  const [teamsByLeague, setTeamsByLeague] = useState<TeamByLeagueType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const apiKey = localStorage.getItem('apiKey')

  useEffect(() => {
    fethCountries()
  }, [season, league])

  const fethCountries = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi(
        apiKey!,
        `teams?league=${league}&season=${season}`
      )

      if (res) {
        setTeamsByLeague(res.response)
        setIsLoading(false)
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    teamsByLeague,
  }
}

export default getTeamsByLeague
