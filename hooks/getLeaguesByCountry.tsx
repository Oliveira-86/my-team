'use client'

import { fetchApi } from '@/actions/api'
import { useEffect, useState } from 'react'
import { CountriesType, LeagueType, SeasonsType } from '@/libs/types'

export interface FilteredByCountryType {
  country?: CountriesType
  league?: LeagueType
  seasons?: SeasonsType[]
}

const getLeaguesByCountry = (name: string) => {
  const [filteredByCountry, setFilteredByCountry] = useState<
    FilteredByCountryType[]
  >([])
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fethCountries()
  }, [])

  const fethCountries = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi('a7fe0814aca3966df878cfcec7273dbe', 'leagues')

      if (res.response) {
        const filteredByCountry = res.response.filter(
          (item: any) => item.country.name === name
        )

        if (filteredByCountry) {
          setFilteredByCountry(filteredByCountry)
          setIsLoading(false)
        }
      }
      setIsLoading(false)
    } catch (error) {}
  }

  return {
    filteredByCountry,
  }
}

export default getLeaguesByCountry
