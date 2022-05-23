import { gql } from '@apollo/client'
import { PartFragment } from '../fragments'

const GET_PARTS = gql`
query {
  parts {
    ...Part
  }
}
${PartFragment}
`
export default GET_PARTS
