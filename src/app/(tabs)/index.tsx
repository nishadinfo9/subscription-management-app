import { FlatList, Image, Text, View } from "react-native";
import "@/global.css";
import {styled} from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import images from "@/constaints/images";
import { HOME_BALANCE, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constaints/data";
import { icons } from "@/constaints/icon";
import { formatCurrency } from "@/lib/utils";
import dayjs from 'dayjs'
import ListHeading from "@/components/ListHeading";
import UpCommingSubscriptionCard from "@/components/UpCommingSubscriptionCard";
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar"/>
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon"/>
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
          <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
        </View>
      </View>

      <View>
        <ListHeading title="upcomming"/>
       
        <FlatList
        data={UPCOMING_SUBSCRIPTIONS}
        renderItem={({item})=>(<UpCommingSubscriptionCard {...item}/>)}
        keyExtractor={(item)=> item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text className="home-empty-state">
          No upcoming renewals yet.
        </Text>}
        >

        </FlatList>
      </View>

      <View>
        <ListHeading title="All Subscription"/>
      </View>
    </SafeAreaView>
  );
}