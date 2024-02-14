import {Image, Pressable, StyleSheet, TextInput,View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const Header = () => {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  return (
    <Animated.View
      // style={[styles.container, {top: Platform.OS === 'ios' ? inset.top : 20}]}
      style={[styles.container, {top: inset.top}]}
      entering={FadeIn.delay(400)}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/chevron.png')}
          style={styles.chevron}
        />
      </Pressable>
      <View style={styles.inputWrapper}>
        <Icon name="magnify" color="black" size={26} />
        <TextInput
          style={styles.inputText}
          placeholder="search products"
          placeholderTextColor={'grey'}
        />
        <Icon name="microphone" color="grey" size={26} />
      </View>
      <Pressable
        onPress={() => {
          console.log('CART');
        }}>
        <Icon 
          name="cart"
          size={26}
          color="black"
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding:6.5
            
          }}
        />
        {/* <Image source={require('../assets/like.png')} style={styles.chevron} /> */}
      </Pressable>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap:10,
    backgroundColor: '#00A8E1',
    padding: 10,
    // borderRadius: 10,
    alignItems:"center"
  },
  chevron: {
    width: 44,
    height: 44,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 14,
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal:10
  },
  inputText: {
    color: "black",
    textAlignVertical: "center",
    flex:1
  }
});
