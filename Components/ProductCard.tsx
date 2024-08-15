import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductCard = ({image, name, price, category, rating, id}: any) => {
  return (
    <>
      <View style={styles.ProductImageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.ProductDetailsContainer}>
        <Text style={styles.ProductName}>{name}</Text>
        <Text style={styles.ProductCategory}>{category}</Text>
      </View>
      <View style={styles.PriceRatingContainer}>
        <Text style={styles.ProductPrice}>{price}</Text>
        <View style={styles.RatingContainer}>
          <Icon name="star" size={20} color={'#FFD33C'} />
          <Text style={styles.ProductRating}>{rating}</Text>
        </View>
      </View>
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductContainer: {width: '48%'},
  ProductImageContainer: {
    width: '100%',
    height: 260,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {width: '100%', height: '100%'},
  ProductDetailsContainer: {marginTop: 8, display: 'flex', gap: 4},
  ProductName: {fontSize: 16, fontWeight: '600', color: '#000000'},
  ProductCategory: {fontSize: 13, color: '#787676'},
  PriceRatingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    marginTop: 12,
  },
  ProductPrice: {fontSize: 17, fontWeight: '600', color: '#000000'},
  RatingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ProductRating: {
    fontSize: 16,
    color: '#000000',
  },
});
