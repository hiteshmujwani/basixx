import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/FontAwesome6';

const ProductDetails = ({navigation, route}: any) => {
  const {id, image, name, category, price, rating} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100, // Adjust this value based on your BottomContainer height
          backgroundColor: '#ffffff',
        }}>
        <View style={styles.container}>
          <View style={styles.ImageContainer}>
            <Image style={styles.Image} source={image} />
            <View style={styles.TopBar}>
              <Pressable
                style={styles.BackButton}
                onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={25} color={'#000000'} />
              </Pressable>
              <Pressable style={styles.WishlistButton}>
                <Ionicons name="heart" size={25} color={'#000000'} />
              </Pressable>
            </View>
          </View>
          <View style={styles.DetailQuantityContainer}>
            <View style={styles.NameRatingContainer}>
              <Text style={styles.ProductName}>{name}</Text>
              <View style={styles.RatingContainer}>
                <Icon name="star" size={25} color={'yellow'} />
                <Text style={styles.Rating}>{rating}</Text>
              </View>
            </View>
            <View style={styles.QuantityContainer}>
              <Pressable style={styles.QuantityBtn}>
                <FeatherIcon name="minus" size={20} color={'#000000'} />
              </Pressable>
              <Text style={styles.QuantityNumber}>{1}</Text>
              <Pressable style={styles.QuantityBtn}>
                <FeatherIcon name="plus" size={20} color={'#000000'} />
              </Pressable>
            </View>
          </View>
          <View style={styles.DescriptionContainer}>
            <Text style={styles.DescriptionText}>
              Its simple and elegant shape makes it perfect for those of you who
              like you who want minimalist clothes Read More. . .
            </Text>
          </View>
          <View style={styles.Seperator}></View>
          <View style={styles.SizeColorContainer}>
            <View style={styles.SizeContainer}>
              <Text style={styles.SizeHeading}>Choose Size</Text>
              <FlatList
                data={['S', 'M', 'L', 'XL']}
                horizontal
                renderItem={({item, index}) => (
                  <View
                    style={
                      index === 2
                        ? {
                            ...styles.SizeTextContainer,
                            backgroundColor: '#000000',
                          }
                        : {...styles.SizeTextContainer}
                    }>
                    <Text
                      style={
                        index === 2
                          ? {...styles.SizeText, color: '#ffffff'}
                          : {...styles.SizeText}
                      }>
                      {item}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View style={styles.SizeContainer}>
              <Text style={styles.SizeHeading}>Color</Text>
              <FlatList
                data={['#787676', '#433F40', '#121111']}
                horizontal
                renderItem={({item, index}) => (
                  <View
                    style={{
                      ...styles.SizeTextContainer,
                      backgroundColor: item,
                    }}></View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.BottomContainer} onPress={()=>navigation.navigate('cart')}>
        <Icon6 name="cart-shopping" size={20} color={'#ffffff'} />
        <Text style={styles.BottomContainerText}>Add To Cart | {price}</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  ImageContainer: {
    width: '100%',
    height: 380,
    borderRadius: 20,
    // elevation: 5,
    shadowColor: '#000000',
    overflow: 'hidden',
    position: 'relative',
  },
  Image: {
    height: '100%',
    width: '100%',
  },
  TopBar: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  BackButton: {
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 100,
    padding: 5,
  },
  WishlistButton: {
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 100,
    padding: 5,
  },
  DetailQuantityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  NameRatingContainer: {
    display: 'flex',
    gap: 5,
  },
  ProductName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  RatingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  Rating: {
    fontSize: 20,
    color: '#000000',
  },
  QuantityContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  QuantityBtn: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 100,
    borderColor: '#DFDEDE',
  },
  QuantityNumber: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },
  DescriptionContainer: {
    marginTop: 16,
    width: '90%',
  },
  DescriptionText: {
    lineHeight: 22,
    fontSize: 16,
    color: '#787676',
  },
  Seperator: {
    borderWidth: 1,
    borderColor: '#F6F6F6',
    marginVertical: 16,
  },
  SizeColorContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeContainer: {
    display: 'flex',
    gap: 5,
  },
  SizeHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  SizeTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 4,
    borderRadius: 100,
    borderColor: '#DFDEDE',
    borderWidth: 1,
    marginRight: 5,
    height: 30,
    width: 30,
  },
  SizeText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
  BottomContainer: {
    position: 'absolute',
    bottom: 20,
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
});
