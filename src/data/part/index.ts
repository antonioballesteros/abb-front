import { useDoQuery, GET_PART } from 'data/graphql'

interface UseGetPartType {
  id: string
}
const useGetPart = ({ id }: UseGetPartType) => {
  return useDoQuery(GET_PART, {
    variables: { id }
  })
}

export default useGetPart
