import { FC } from 'react'
import getLeaguesByCountry from './getLeaguesByCountry'

const getSeasons = (index: string, country: string) => {
  const { filteredByCountry } = getLeaguesByCountry(country)

  const seasonsList = filteredByCountry?.map((item: any) => item.seasons)
  const seasons = seasonsList[Number(index)]?.map((item: any) => item.year)

  return {
    seasons: seasons?.reverse(),
  }
}

export default getSeasons
