import { gql } from '@apollo/client'
import { FeatureFragment, ControlFragment } from '.'

const FeatureFullFragment = gql`
fragment FeatureFull on Feature {
    ...Feature
    controls {
        ...Control
    }
}
${FeatureFragment}
${ControlFragment}
`

export default FeatureFullFragment
