import { gql } from '@apollo/client'
import { ControlFragment } from '../fragments'

const ADDED_CONTROL = gql`
subscription {
  addedControl{
     ...Control
     feature {
      layout {
        partId
      }
    }
   }
 }
 ${ControlFragment}
`
export default ADDED_CONTROL
