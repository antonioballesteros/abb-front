import { gql } from '@apollo/client'
import { LayoutFragment, FeatureFullFragment } from '.'

const LayoutFullFragment = gql`
fragment LayoutFull on Layout {
    ...Layout
    features {
        ...FeatureFull
    }
}
${LayoutFragment}
${FeatureFullFragment}
`

export default LayoutFullFragment
