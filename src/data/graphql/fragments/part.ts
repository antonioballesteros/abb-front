import { gql } from '@apollo/client'

const PartFragment = gql`
fragment Part on Part {
    id
    name
}
`

export default PartFragment
