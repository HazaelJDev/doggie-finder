import { FC, useState } from 'react'
import { slugify } from '../common/utils/slugify'
import Card from './Card'
import Search from './Search'

interface Props {
  data: string[]
}

const MainCards: FC<Props> = ({ data }) => {
  const [breeds, setBreeds] = useState<string[]>([])
  const [noMatches, setNoMatches] = useState<boolean>(false)

  return (
    <main className="bg-slate-100 dark:bg-slate-800 w-full h-fit py-10 flex flex-col items-center gap-10">
      <Search
        data={data}
        breeds={breeds}
        setBreeds={setBreeds}
        noMatches={noMatches}
        setNoMatches={setNoMatches}
      />
      <section className="px-8 w-full">
        <ul className="w-full grid grid-flow-row grid-cols-1 gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-4">
          {breeds.length > 0 ? (
            breeds.map(breed => (
              <Card
                key={`key-${breed}`}
                breed={breed}
                href={`/breed/${slugify(breed)}`}
              />
            ))
          ) : noMatches ? (
            <section className="w-full col-span-1 h-40 px-5 flex flex-col text-center justify-center items-center md:px-10 md:col-span-2 lg:col-span-4">
              <h3 className="display-medium dark:text-gray-50 text-gray-800">
                There are no matches with your search 😟
              </h3>
            </section>
          ) : (
            data.map(breed => (
              <Card
                key={`key-${breed}`}
                breed={breed}
                href={`/breed/${slugify(breed)}`}
              />
            ))
          )}
        </ul>
      </section>
    </main>
  )
}

export default MainCards
