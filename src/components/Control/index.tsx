
import { ControlType } from 'types'

import './index.scss'
import { Quality } from 'components'
import { calculateSomethingRelatedWithLast10 } from './util'

const parseValue = (value: number | null) => {
  if (!value) return null
  const t = value * 100
  return parseInt(t.toString()) / 100
}

const Control = ({
  name,
  value,
  nominal,
  dev1,
  dev2,
  quality,
  lasts
}:ControlType) => {
  /*
  Title attribute used only during tests !!
  to allow see nominal and value loaded
  */

  const dev = value ? value - nominal : null

  const devTol =
    quality === 'BAD' && value !== null
      ? value > nominal
        ? value - nominal - dev1
        : value - nominal + dev1
      : 0

  const lastDevs = calculateSomethingRelatedWithLast10(nominal, lasts)

  return (
    <div className="control">
      <div className="name">{name}</div>
      <div
        className="dev"
        title={`[Nom:${nominal} / Val:${parseValue(value)} ]`}
      >
        {parseValue(dev)}
      </div>
      <div
        className="dev-tol"
        title={`[Nom:${nominal} / Val:${parseValue(
          value
        )} / NormalDev:${parseValue(dev1)} / MaxDev:${parseValue(
          dev2
        )}  ]`}
      >
        {parseValue(devTol)}
      </div>
      <div
        className="lasts"
        title={`[Nom:${nominal} / Val:${parseValue(lastDevs)} ]`}
      >
        {parseValue(lastDevs)}
      </div>
      <div className="quality">
        <Quality quality={quality} />
      </div>
    </div>
  )
}

export default Control
