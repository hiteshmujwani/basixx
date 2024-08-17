import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypoicons from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CartProductCard from '../Components/CartProductCard';
import { useCart } from '../Context/Cart';

const Cart = ({navigation}: any) => {
  const [cart,setCart] = useCart()
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
          <Pressable
            style={styles.BackButton}
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} color={'#000000'} />
          </Pressable>
          <Pressable style={styles.MenuBtn}>
            <Ionicons name="menu" size={25} color={'#000000'} />
          </Pressable>
        </View>
      <ScrollView style={{flex:0,marginBottom: 110}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        {cart && cart.map((item:any, index:number) => (
          <View key={index}>
            <CartProductCard product={item}/>
            <View
            
              style={{
                borderWidth: 1,
                borderColor: '#F6F6F6',
                marginVertical: 20,
              }}></View>
          </View>
        ))}
        <View style={styles.BillingContainer}>
          <Text style={styles.BillingHeading}>Shipping Information</Text>
          <View style={styles.PaymentCardContainer}>
            <View style={styles.SelectedCardContainer}>
              <Image
                source={require('../Assets/image.png')}
                style={styles.VisaImage}
              />
              <Text style={styles.PaymentCardText}>**** **** **** 4962</Text>
            </View>
            <Ionicons name="chevron-down" size={30} color={'#000000'} />
          </View>
          <View style={styles.RowContainer}>
            <Text style={styles.RowText}>Total Items</Text>
            <Text style={styles.RowAmount}>$2500</Text>
          </View>
          <View style={styles.RowContainer}>
            <Text style={styles.RowText}>Shipping Fee</Text>
            <Text style={styles.RowAmount}>$10</Text>
          </View>
          <View style={styles.RowContainer}>
            <Text style={styles.RowText}>Discount</Text>
            <Text style={styles.RowAmount}>$100</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#F6F6F6',
              marginVertical: 20,
            }}></View>
          <View style={styles.RowContainer}>
            <Text style={styles.RowText}>Sub Total</Text>
            <Text style={styles.RowAmount}>$2390</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={styles.BottomContainer}
        onPress={() => navigation.navigate('cart')}>
        <Text style={styles.BottomContainerText}>Pay</Text>
      </Pressable>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  BillingContainer: {
    display: 'flex',
    gap: 10,
  },

  container: {
    paddingHorizontal: 15,
    width: '100%',
    height:'100%',
    backgroundColor: '#ffffff',
    display:'flex',
  },
  TopBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 0,
  },
  BackButton: {
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 100,
    padding: 5,
  },
  MenuBtn: {
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 100,
    padding: 5,
  },

  BillingHeading: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  RowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  RowText: {
    fontSize: 17,
    color: '#000000',
  },
  RowAmount: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
  },
  BottomContainer: {
    position: 'absolute',
    bottom: 30,
    flex:0.34,
    left: 0,
    marginHorizontal: 10,
    right: 0,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    alignItems: 'center',
    padding: 18,
    borderRadius: 100,
  },
  BottomContainerText: {color: '#ffffff', fontSize: 18, fontWeight: '700'},
  PaymentCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  VisaImage: {height: 45, width: 75},
  PaymentCardText: {color: '#000000', fontSize: 20, fontWeight: '600'},
  SelectedCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
