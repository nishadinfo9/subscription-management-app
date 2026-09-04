import { Text, View } from "react-native";
import "../../../global.css";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Hello World
      </Text>

      <Link href={'/onbording'} className="mt-4 rounded bg-primary text-lg text-white p-4">
      Go to onbording
      </Link>

      <Link href={'/(auth)/sign-in'} className="mt-4 rounded bg-primary text-lg text-white p-4">
      Go to Sign In
      </Link>

      <Link href={'/(auth)/sign-up'} className="mt-4 rounded bg-primary text-lg text-white p-4">
      Go to Sign Up
      </Link>

      <Link href='/subscriptions/spotify' className="mt-4 rounded bg-primary text-lg text-white p-4">
      Go to Spotify
      </Link>

      <Link href={{
        pathname: '/subscriptions/[id]',
        params: {id: 'claude'}
      }} className="mt-4 rounded bg-primary text-lg text-white p-4">
      Go to claude
      </Link>
    </View>
  );
}