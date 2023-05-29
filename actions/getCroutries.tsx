'use client'

import { fetchApi } from '@/actions/api'
import { CountriesType } from '@/libs/types'
import { useEffect, useState } from 'react'

const getCroutries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiKey = localStorage.getItem('apiKey')

  useEffect(() => {
    fethCountries()
  }, [])

  const fethCountries = async () => {
    setIsLoading(true)
    try {
      const res = await fetchApi(apiKey!, 'countries')

      if (res.response) {
        setCountries(res.response)
        setIsLoading(false)
      }
      setIsLoading(false)
    } catch (error) {}
  }

  return {
    countries,
    isLoading,
    error,
    fethCountries,
  }
}

export default getCroutries
