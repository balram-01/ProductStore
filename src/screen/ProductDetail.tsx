import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import Header from '../components/Header';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import {Product} from '../features/ProductSlice';

type ProductDetailsScreenRouteProp = RouteProp<
  SharedElementStackParamList,
  'ProductDetail'
>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};

const ProductDetail = ({route}: Props) => {
  const {item}: {item: Product} = route.params as {item: Product};
  const {width} = useWindowDimensions();
  const height = (width * 100) / 100;
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <View>
          <View>
            <ScrollView horizontal>
              {item.images.map((image, index) => (
                <Animated.Image
                  sharedTransitionTag={index == 0 ? item.id.toString() : ''}
                  source={{uri: image}}
                  resizeMode={'contain'}
                  style={{width: width, height: width}}
                />
              ))}
            </ScrollView>

            <Animated.View
              style={styles.textContainer}
              entering={FadeIn.delay(600)}>
              <Text style={styles.textName}>{item.title}</Text>
              <Text style={styles.textLocation}>{item.brand}</Text>
            </Animated.View>
          </View>
          {/* <Animated.View entering={FadeInDown.delay(800)}>
            <Text style={styles.textAbout}>About</Text>
            <Text style={styles.text}>{item.about}</Text>
          </Animated.View> */}
        </View>
        <Button />
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
    borderRadius: 20,
    margin: 10,
  },
  textName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textLocation: {
    color: 'white',
    fontSize: 16,
  },
  textAbout: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
});
