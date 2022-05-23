import { gql } from '@apollo/client'

const GET_PART = gql`
query($id:String!) {
  getPart(id: $id) {
    id
    name
    layouts {
      id
      name
      size
      features {
        id
        name
        quality
        controls {
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
      }
    }
  }
}

`
export default GET_PART
