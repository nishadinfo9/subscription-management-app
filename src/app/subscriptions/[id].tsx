import { View, Text } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'

const subscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>subscriptionDetails Id: {id}</Text>
      <Link href="/" className="mt-4 rounded bg-primary text-lg text-white p-4" >Go Back</Link>
    </View>
  )
}

export default subscriptionDetails