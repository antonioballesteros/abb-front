import { gql } from '@apollo/client'

const LayoutFragment = gql`
fragment Layout on Layout {
    id
    name
    size
    partId
}
`

export default LayoutFragment
