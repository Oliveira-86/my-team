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
