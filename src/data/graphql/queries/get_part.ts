import { gql } from '@apollo/client'
import { PartFullFragment } from '../fragments'

const GET_PART = gql`
query($id:String!) {
  getPart(id: $id) {
    ...PartFull
  }
}
${PartFullFragment}
`
export default GET_PART
