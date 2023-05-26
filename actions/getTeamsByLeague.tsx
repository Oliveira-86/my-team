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

  useEffect(() => {
    fethCountries()
  }, [])

  const fethCountries = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi(
        'a7fe0814aca3966df878cfcec7273dbe',
        `teams?league=${league}&season=${season}`
      )
      console.log(res)
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
