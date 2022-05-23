import React from 'react'
import classNames from 'classnames'
import { Loading, ErrorCard, Feature } from 'components'
import { useGetPart } from 'data'
import './index.scss'

import { PartType, LayoutType, FeatureType } from 'types'

interface PartT {
  id: string
}

function Part ({ id }: PartT) {
  const { data, loading, error } = useGetPart({ id })

  if (loading || !data?.getPart) return <Loading />
  if (error != null) return <ErrorCard msg={error.toString()} />

  const part: PartType = data.getPart
  console.log('[refresh]', { part, loading, error })

  return (
    <div className='part'>
      <header>
        <h1>{part.name}</h1>
      </header>

      <div className='columns'>
        {part.layouts.map((layout: LayoutType) => {
          return (
            <div
              key={layout.id}
              className={classNames('column', `width-${layout.size}`)}
            >
              {layout.features.map((feature: FeatureType) => (
                <div
                  key={feature.id}
                  className={classNames(
                    'box',
                    `height-${layout.features.length}`
                  )}
                >
                  <Feature
                    feature={feature}
                    size={layout.size}
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Part
