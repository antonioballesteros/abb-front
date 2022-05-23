import { gql } from '@apollo/client'
import { PartFragment, LayoutFullFragment } from '.'

const PartFullFragment = gql`
fragment PartFull on Part {
    ...Part
    layouts {
        ...LayoutFull
    }
}
${PartFragment}
${LayoutFullFragment}
`

export default PartFullFragment
