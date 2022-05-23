import { gql } from '@apollo/client'

const FeatureFragment = gql`
fragment Feature on Feature {
    id
    name
    quality
    layoutId
}
`

export default FeatureFragment
