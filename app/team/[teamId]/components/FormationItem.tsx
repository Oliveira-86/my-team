import clsx from 'clsx'
import { FC } from 'react'

interface FormationItemProps {
  formation: string
  played: number
  isPar?: boolean
  index?: number
  length?: number | undefined
}

const FormationItem: FC<FormationItemProps> = ({
  formation,
  played,
  isPar,
  index,
  length,
}) => {
  return (
    <div
      className={clsx(
        `
          text-start
          border-[1px] 
          border-slate-500 
          px-4 py-2
        `,
        isPar ? 'bg-secondary-black' : 'bg-primary-black',
        index === 0 && 'rounded-t-md',
        length && index === length - 1 && 'rounded-b-md'
      )}
    >
      <p className="text-slate-200 font-normal">
        {formation} em {played} Jogos
      </p>
    </div>
  )
}

export default FormationItem
