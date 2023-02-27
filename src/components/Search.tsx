import { FC, useState } from 'react'

interface Props {
  breeds: string[]
  setBreeds: (e: any) => any
  noMatches: boolean
  setNoMatches: (e: boolean) => any
  data: string[]
}

const Search: FC<Props> = ({
  breeds,
  setBreeds,
  data,
  noMatches,
  setNoMatches
}) => {
  const [searched, setSearched] = useState<string>('')

  const handledChange = (e: any) => {
    setSearched(e.target.value)
    filterBreeds(e.target.value)
  }

  const filterBreeds = (textSearch: string) => {
    let breedsSearched = data.filter(breed => {
      if (breed.toString().toLowerCase().includes(textSearch.toLowerCase())) {
        return breed
      }
    })

    if (textSearch === '') {
      setNoMatches(false)
    } else if (breedsSearched.length == 0) {
      setNoMatches(true)
    }

    setBreeds(breedsSearched)
  }

  return (
    <div className="w-4/5 flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            value={searched}
            onChange={handledChange}
            className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-tertiary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-tertiary-200 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
        </div>
      </div>
    </div>
  )
}

export default Search
