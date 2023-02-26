import type { BreedsAllResponse } from '../interfaces/breeds-all-response.interface'

export async function getDogs(): Promise<string[]> {
  const response = await fetch('https://dog.ceo/api/breeds/list/all')
  const data: BreedsAllResponse = await response.json()
  const allBreeds = []

  for (const key in data.message) {
    if (data.message[key].length > 0) {
      for (const value of data.message[key]) {
        allBreeds.push(value + ' ' + key)
      }
    } else {
      allBreeds.push(key)
    }
  }

  return allBreeds
}
