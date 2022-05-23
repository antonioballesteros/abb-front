import { PartType } from 'types'

import './index.scss'

type ButtonListT = {
  parts: PartType[]
  onClick:(id: string) => void
}

const ButtonList = ({ parts, onClick }:ButtonListT) => {
  return (
    <div className="button-list">
      {parts.map(part => {
        return (
          <button key={part.id} onClick={() => onClick(part.id)}>{part.name}</button>
        )
      })}
      <button key={'null'} onClick={() => onClick('')}>Logout</button>
    </div>
  )
}

export default ButtonList
