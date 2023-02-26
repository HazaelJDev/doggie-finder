export async function getImages(
  typeBreed: string,
  breed: string
): Promise<string[]> {
  let imgs: string[]

  if (typeBreed === 'sub-breed') {
    const subBreed = breed.split(' ')
    const response = await fetch(
      `https://dog.ceo/api/breed/${subBreed[1]}/${subBreed[0]}/images/random/17`
    )
    const data = await response.json()
    imgs = data['message']
  } else {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/17`
    )
    const data = await response.json()
    imgs = data['message']
  }

  return imgs
}
