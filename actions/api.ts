export const fetchApi = (api_key: string, endpoint?: string) => {
  let myHeaders = new Headers()
  myHeaders.append('x-rapidapi-key', api_key)
  myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io')

  let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  return fetch(`https://v3.football.api-sports.io/${endpoint}`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => console.log('error', error))
}
