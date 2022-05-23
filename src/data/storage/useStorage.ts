import { useState } from 'react'

export const useStorage = (): [string, (newId: string) => void] => {
  const [value, setValue] = useState(sessionStorage.getItem('defaultPart') as string)
  const updateValue = (newId:string) => {
    sessionStorage.setItem('defaultPart', newId)
    setValue(newId)
  }
  return [value, updateValue]
}

export default useStorage
