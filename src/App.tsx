import React, { useState } from 'react'
import { Part } from 'page'
import { Loading, ErrorCard, ButtonList } from 'components'
import './App.scss'
import { useGetParts, useControlSubscription } from './data'
import { PartType } from 'types'

function App () {
  const [id, setId] = useState(sessionStorage.getItem('defaultPart'))

  const { data, loading, error } = useGetParts()
  useControlSubscription()

  const onClick = (newId:string) => {
    sessionStorage.setItem('defaultPart', newId)
    setId(newId)
  }

  if (loading || !data?.parts) return <Loading />
  if (error != null) return <ErrorCard msg={error.toString()} />

  const parts: PartType[] = data.parts

  return (
    <div className='app'>
      <ButtonList parts={parts} onClick={onClick} />
      {!!id && <Part id={id} />}
    </div>
  )
}

export default App
