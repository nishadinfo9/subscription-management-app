import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link className="mt-4 rounded bg-primary text-lg text-white p-4" href={'/(auth)/sign-up'}>Create An Account</Link>
    </View>
  )
}

export default SignIn