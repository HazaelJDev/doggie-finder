import type { FC } from 'react'
import { toTitle } from '../common/utils/toTitle'

interface Props {
  breed: string
  href: string
}

const Card: FC<Props> = ({ breed, href }) => {
  return (
    <li className="w-64 h-fit  rounded-2xl bg-secondary-200 dark:bg-secondary-500">
      <a href={href} className="w-full h-full flex flex-row p-4 justify-between dark:text-gray-50 text-gray-800">
        <h2 className="title-medium">{toTitle(breed)}</h2>
        <span className="material-symbols-outlined"> pets</span>
      </a>
    </li>
  )
}

export default Card
