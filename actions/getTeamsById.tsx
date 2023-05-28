'use client'

import { fetchApi } from '@/actions/api'
import { useEffect, useState } from 'react'
import { LeagueType, TeamType } from '@/libs/types'

interface FormationType {
  formation: string
  played: number
}

interface FixturesType {
  draws: { total: number }
  wins: { total: number }
  loses: { total: number }
  played: { total: number }
}

interface TeamByIdType {
  team: TeamType
  league: LeagueType
  lineups: FormationType[]
  fixtures: FixturesType
}

interface GoalsByMinuteType {
  total: number
  percentage: string
}

export interface GoalsByPeriodType {
  fifteen: GoalsByMinuteType
  thirty: GoalsByMinuteType
  fortyFive: GoalsByMinuteType
  sixty: GoalsByMinuteType
  SeventyFive: GoalsByMinuteType
  ninety: GoalsByMinuteType
  hundredFive: GoalsByMinuteType
  hundredTwenty: GoalsByMinuteType
}

const getTeamsById = (teamId: number, leagueId: number, season: number) => {
  const [goalsByMinute, setGoalsByMinute] = useState<GoalsByPeriodType>()
  const [teamsById, setTeamsById] = useState<TeamByIdType>({
    team: {},
    league: {},
    lineups: [],
    fixtures: {
      draws: { total: 0 },
      wins: { total: 0 },
      loses: { total: 0 },
      played: { total: 0 },
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fethTeamStatistics()
  }, [season, leagueId, teamId])

  const fethTeamStatistics = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi(
        'a7fe0814aca3966df878cfcec7273dbe',
        `teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`
      )

      if (res) {
        setTeamsById(res.response)
        setGoalsByMinute(res.response.goals.for.minute)
        setIsLoading(false)
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  console.log('teamsById: ', teamsById)

  return {
    teamsById,
    goalsByMinute,
  }
}

export default getTeamsById
