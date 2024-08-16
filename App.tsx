import {View, Text, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {tabBarIcon} from './Shared/HomeScreenData';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

const HomeBottomNavigation = ({navigation,route}) => {
  const Tab = createBottomTabNavigator();
  console.log(route.name)
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIconStyle: {
        backgroundColor: '#ffffff',
      },
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#000000',
        backfaceVisibility: 'hidden',
        elevation: 10,
        borderTopWidth: 0,
        borderRadius: 100,
        margin: 20,
        height: 70,
        paddingHorizontal: 5,
        display: route.name === 'Cart' ? 'none' : 'flex', // Hide tab bar when on Cart screen
      },
    })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => tabBarIcon.home,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: () => tabBarIcon.cart,
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Wishlist"
        options={{
          tabBarIcon: () => tabBarIcon.wishlist,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => tabBarIcon.profile,
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeBottomNavigation} />
        <Stack.Screen name="details" component={ProductDetails} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
