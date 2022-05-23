import { UPDATED_CONTROL } from 'data/graphql'
import { ControlFragment } from 'data/graphql/fragments'

import { useApolloClient, useSubscription } from '@apollo/client'

const useControlSubscription = () => {
  const client = useApolloClient()

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
}

export default useControlSubscription
