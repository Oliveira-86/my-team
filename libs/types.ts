export type LeagueType = {
  id?: number
  logo?: string
  name?: string
  type?: string
}

export type SeasonsType = {
  current?: boolean
  end?: string
  start?: string
  year?: number
  coverage?: [[]]
}

export type CountriesType = {
  name?: string
  code?: string
  flag?: string
}

export interface TeamType {
  code?: string
  country?: string
  founded?: number
  id?: number
  logo?: string
  name?: string
  national?: boolean
}

export interface VenueType {
  address: string
  capacity: number
  city: string
  id: number
  image: string
  name: string
  surface: string
}
