import { useDoQuery, GET_PART, GET_PARTS } from 'data/graphql'

interface UseGetPartType {
  id: string
}
const useGetPart = ({ id }: UseGetPartType) => {
  return useDoQuery(GET_PART, {
    variables: { id }
  })
}

const useGetParts = () => {
  return useDoQuery(GET_PARTS)
}

export { useGetPart, useGetParts }
