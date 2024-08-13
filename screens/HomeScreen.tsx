import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import Avtar from '../Assets/AvtarImage/Avtar.png';
import {SearchBar} from 'react-native-screens';
import Icon from 'react-native-vector-icons';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={HomeStyle.container}>
        {/* header part  */}
        <View style={HomeStyle.header}>
          <View style={HomeStyle.WelcomeContainer}>
            <Text style={HomeStyle.WelcomeText}>Hello, Welcome</Text>
            <Text style={HomeStyle.WelcomeName}>Hitesh Mujwani</Text>
          </View>
          <View style={HomeStyle.AvtarContainer}>
            <Image style={HomeStyle.Avtar} source={Avtar} />
          </View>
        </View>
        {/* header part  */}
        {/* Header Search Container  */}
        <View style={HomeStyle.SearchContainer}>
          <TextInput
            style={HomeStyle.SearchBox}
            placeholder="Search Clothes..."
          />
          <Pressable style={HomeStyle.FilterBox}></Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const HomeStyle = StyleSheet.create({
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
    fontSize: 12,
    color: '#787676',
  },
  WelcomeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  AvtarContainer: {
    width: 32,
    height: 32,
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
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#DFDEDE',
    borderRadius: 8,
    flex: 1,
  },
  FilterBox: {
    padding: 12,
    backgroundColor: '#000000',
    borderRadius: 8,
    flex: 0.25,
  },
});
