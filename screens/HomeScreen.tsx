import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
  FlatList,
  RefreshControl,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Categories, ProductData} from '../Shared/HomeScreenData';
import ProductCard from '../Components/ProductCard';
import { useCart } from '../Context/Cart';

const HomeScreen = ({navigation}: any) => {
  const [cart,setCart] = useCart()
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  console.log(cart)
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <View style={HomeStyle.container}>
        {/* header part  */}
        <View style={HomeStyle.header}>
          <View style={HomeStyle.WelcomeContainer}>
            <Text style={HomeStyle.WelcomeText}>Hello, Welcome</Text>
            <Text style={HomeStyle.WelcomeName}>Hitesh Mujwani</Text>
          </View>
          <View style={HomeStyle.AvtarContainer}>
            <Image
              style={HomeStyle.Avtar}
              source={require('../Assets/AvtarImage/Avtar.png')}
            />
          </View>
        </View>
        {/* header part  */}
        {/* Header Search Container  */}
        <View style={HomeStyle.SearchContainer}>
          <TextInput
            style={HomeStyle.SearchBox}
            placeholderTextColor={'#000000'}
            placeholder="Search Clothes..."
          />
          <Pressable style={HomeStyle.FilterBox}>
            <Icon name="sliders" size={25} color={'#ffffff'} />
          </Pressable>
        </View>
        {/* Header Search Container  */}
        {/* Categories section  */}
        <FlatList
          style={HomeStyle.CategoryContainer}
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Pressable
              style={
                index === 0
                  ? HomeStyle.CategoryBox
                  : HomeStyle.CategoryBoxUnactive
              }>
              {item.icon}
              <Text
                style={
                  index === 0
                    ? HomeStyle.CategoryActiveName
                    : HomeStyle.CategoryUnactiveName
                }>
                {item.Name}
              </Text>
            </Pressable>
          )}
        />
        {/* Categories section  */}
        {/* Products Cards */}
        <View style={HomeStyle.ProductListContainer}>
          {ProductData.map((item: object, index: number) => (
            <Pressable
              key={index}
              style={HomeStyle.ProductContainer}
              onPress={() => navigation.navigate('details', {...item})}>
              <ProductCard {...item} />
            </Pressable>
          ))}
        </View>
        {/* Products Cards */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const HomeStyle = StyleSheet.create({
  ProductContainer: {width: '48%'},
  ProductListContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 24,
    gap: 12,
    justifyContent: 'center',
    marginBottom: 90,
  },
  container: {
    padding: 15,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  WelcomeContainer: {
    display: 'flex',
    gap: 4,
  },
  WelcomeText: {
    fontSize: 13,
    color: '#787676',
  },
  WelcomeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  AvtarContainer: {
    width: 40,
    height: 40,
  },
  Avtar: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },
  SearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
    gap: 16,
  },
  SearchBox: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#DFDEDE',
    borderRadius: 8,
    flex: 1,
  },
  FilterBox: {
    padding: 8,
    backgroundColor: '#000000',
    borderRadius: 8,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CategoryContainer: {
    marginTop: 24,
  },
  CategoryBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 8,
    gap: 5,
    marginRight: 10,
    color: '#ffffff',
  },
  CategoryBoxUnactive: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#DFDEDE',
    paddingHorizontal: 13,
    borderRadius: 8,
    gap: 5,
    marginRight: 10,
    color: '#ffffff',
  },
  CategoryActiveName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  CategoryUnactiveName: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});
