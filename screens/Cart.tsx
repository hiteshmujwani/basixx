import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypoicons from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
       
        
        <ScrollView >
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
        {[1,2].map((item,index)=>(<>
            <View style={styles.CartProductContainer}>
            <View style={styles.ImageContainer}>
                <Image source={require('../Assets/Products/Product-2.png')} style={styles.Image}/>
            </View>
            <View style={styles.ProductDetailContainer}>
                <View style={styles.ProductNameCategoryMenu}>
                    <View style={styles.ProductNameCategory}>
                    <Text style={styles.ProductName}>Product Name</Text>
                    <Text style={styles.ProductCategory}>Category</Text>
                    </View>
                    <Entypoicons name='dots-three-horizontal' size={25} color={'#000000'}/>
                </View>
                <View style={styles.PirceQuantityContainer}>
                    <Text style={styles.ProductPrice}>$788</Text>
                    <View style={styles.QuantityContainer}>
              <Pressable style={styles.QuantityBtn}>
                <FeatherIcon name="minus" size={18} color={'#000000'} />
              </Pressable>
              <Text style={styles.QuantityNumber}>{1}</Text>
              <Pressable style={styles.QuantityBtn}>
                <FeatherIcon name="plus" size={18} color={'#000000'} />
              </Pressable>
            </View>
                </View>
                
            </View>
            </View>
            <View style={{borderWidth: 1,
    borderColor: '#F6F6F6',
    marginVertical: 20,}}></View>
            </>
        ))}
        <View style={styles.BillingContainer}>
            <Text style={styles.BillingHeading}>Shipping Information</Text>
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
            <View style={{borderWidth: 1,
    borderColor: '#F6F6F6',
    marginVertical: 20,}}></View>
            <View style={styles.RowContainer}>
                <Text style={styles.RowText}>Sub Total</Text>
                <Text style={styles.RowAmount}>$2390</Text>
            </View>
            
        </View>
        </ScrollView>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    BillingContainer:{
        display:'flex',
        gap:10,
    },
    
    container: {
        paddingHorizontal:15,
        width:'100%',
        backgroundColor:'#ffffff'
      },
      TopBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        paddingVertical:10,
        marginBottom:20
        
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
        CartProductContainer:{
            display:'flex',
            flexDirection:'row',
            gap:10,
            // marginBottom:30
        },
        ImageContainer:{
            height:90,
            width:90,
            overflow:'hidden',
            borderRadius:12,
        },
        Image:{
            height:'100%',
            width:'100%',

        },
        ProductDetailContainer:{
           flex:1,
           gap:12,
        },
        ProductNameCategoryMenu:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        ProductNameCategory:{
            display:'flex',
            gap:2,
        },
        PirceQuantityContainer:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            width:'100%'
        },
        ProductCategory:{
            color:'#000000'
        },
        ProductPrice:{
            color:'#000000',
            fontSize:17,
            fontWeight:'800'
        },
        ProductName:{
            color:'#000000',
            fontSize:18,
            fontWeight:'600',
            letterSpacing:0.5
        },
        BillingHeading:{
            color:'#000000',
            fontSize:18,
            fontWeight:'600'
        },
        RowContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        RowText:{
            fontSize:17,
            color:'#000000'
        },
        RowAmount:{
            fontSize:17,
            color:'#000000',
            fontWeight:'600'
        }
})