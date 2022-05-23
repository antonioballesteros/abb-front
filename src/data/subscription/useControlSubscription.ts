import { useStorage } from 'data/storage'

import { UPDATED_CONTROL, ADDED_CONTROL, GET_PART } from 'data/graphql'
import { ControlFragment } from 'data/graphql/fragments'

import { useApolloClient, useSubscription } from '@apollo/client'

import { PartType } from 'types'
const useControlSubscription = () => {
  const client = useApolloClient()

  const [id] = useStorage()

  useSubscription(UPDATED_CONTROL, {
    onSubscriptionData: ({ subscriptionData }) => {
      const newData = subscriptionData?.data?.updatedControl

      client.writeFragment({
        id: `${newData.__typename}:${newData.id}`,
        fragment: ControlFragment,
        data: newData
      })
    }
  })

  useSubscription(ADDED_CONTROL, {
    onSubscriptionData: ({ subscriptionData }) => {
      const newData = subscriptionData?.data?.addedControl

      client.writeFragment({
        id: `${newData.__typename}:${newData.id}`,
        fragment: ControlFragment,
        data: newData
      })

      const data = client.readQuery({
        query: GET_PART,
        variables: {
          id
        }
      })

      const part = data.getPart as PartType

      const newPart = {
        ...part,
        layouts: part.layouts.map(layout => {
          return {
            ...layout,
            features: layout.features.map(feature => {
              return {
                ...feature,
                controls: (feature.id === newData.featureId) ? [...feature.controls, newData] : feature.controls
              }
            })
          }
        })
      }

      client.writeQuery({
        query: GET_PART,
        variables: {
          id: sessionStorage.getItem('defaultPart')
        },
        data: {
          ...data,
          getPart: newPart
        }
      })
    }
  })
}

export default useControlSubscription
