import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Entypoicons from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CartProductCard = ({product}:any) => {
  console.log("from Cart Card Page ",product)
  return (
    <View style={styles.CartProductContainer}>
      <View style={styles.ImageContainer}>
        <Image
          source={product.image}
          style={styles.Image}
        />
      </View>
      <View style={styles.ProductDetailContainer}>
        <View style={styles.ProductNameCategoryMenu}>
          <View style={styles.ProductNameCategory}>
            <Text style={styles.ProductName}>{product.name}</Text>
            <Text style={styles.ProductCategory}>{product.category}</Text>
          </View>
          <Entypoicons
            name="dots-three-horizontal"
            size={25}
            color={'#000000'}
          />
        </View>
        <View style={styles.PirceQuantityContainer}>
          <Text style={styles.ProductPrice}>{product.price}</Text>
          <View style={styles.QuantityContainer}>
            <Pressable style={styles.QuantityBtn}>
              <FeatherIcon name="minus" size={18} color={'#000000'} />
            </Pressable>
            <Text style={styles.QuantityNumber}>{product.qty}</Text>
            <Pressable style={styles.QuantityBtn}>
              <FeatherIcon name="plus" size={18} color={'#000000'} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProductCard;

const styles = StyleSheet.create({
  QuantityContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  QuantityBtn: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 100,
    borderColor: '#DFDEDE',
  },
  QuantityNumber: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  CartProductContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    // marginBottom:30
  },
  ImageContainer: {
    height: 90,
    width: 90,
    overflow: 'hidden',
    borderRadius: 12,
  },
  Image: {
    height: '100%',
    width: '100%',
  },
  ProductDetailContainer: {
    flex: 1,
    gap: 12,
  },
  ProductNameCategoryMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProductNameCategory: {
    display: 'flex',
    gap: 2,
  },
  PirceQuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ProductCategory: {
    color: '#000000',
  },
  ProductPrice: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '800',
  },
  ProductName: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
