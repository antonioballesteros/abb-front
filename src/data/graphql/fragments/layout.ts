import { gql } from '@apollo/client'

const LayoutFragment = gql`
fragment Layout on Layout {
    id
    name
    size
}
`

export default LayoutFragment
