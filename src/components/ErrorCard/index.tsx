import React, { useState } from 'react'

import './index.scss'

interface ErrorCardType {
  msg: string | boolean
}
const ErrorCard = ({ msg }: ErrorCardType) => {
  const [showError, setShowError] = useState(true)
  const onClick = () => {
    setShowError(false)
  }
  return showError
    ? (
      <div className='errorCard' onClick={onClick}>
        <h3>Problem with data:</h3>
        <h4>{msg}</h4>
      </div>
      )
    : null
}

export default ErrorCard
