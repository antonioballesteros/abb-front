import { gql } from '@apollo/client'
import { ControlFragment } from '../fragments'

const UPDATED_CONTROL = gql`
subscription {
    updatedControl{
     ...Control
   }
 }
 ${ControlFragment}
`
export default UPDATED_CONTROL
