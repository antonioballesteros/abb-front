import { useQuery } from '@apollo/client'

const useDoQuery = (gql: any, options: any = {}) => {
  const defaultOptions = {
    errorPolicy: 'all'
  }

  return useQuery(gql, {
    ...defaultOptions,
    ...options
  })
}

export default useDoQuery
