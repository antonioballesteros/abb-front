import classNames from 'classnames'
import { QualityType } from 'types'

import { good, warning, bad } from 'assets'
import './index.scss'

const getIcon = (quality:QualityType) => {
  if (quality === 'BAD') return bad
  if (quality === 'WARNING') return warning

  return good
}

type QualityT = {
  quality: QualityType,
  size?: number
}
const Quality = ({ quality, size = 14 }:QualityT) => {
  return (
    <img
      className={classNames('quality', quality)}
      src={getIcon(quality)}
      alt={quality || ''}
      style={{
        width: size,
        height: size
      }}
    />
  )
}

export default Quality
