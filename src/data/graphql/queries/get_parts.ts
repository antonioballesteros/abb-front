import { gql } from '@apollo/client'

const GET_PARTS = gql`
query {
  parts {
    id
    name
  }
}
`
export default GET_PARTS
