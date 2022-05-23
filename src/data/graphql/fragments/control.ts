import { gql } from '@apollo/client'

const ControlFragment = gql`
fragment Control on Control {
    id
    name
    order
    nominal
    dev1
    dev2
    value
    quality
    lasts
}
`

export default ControlFragment
