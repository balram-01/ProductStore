import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data} from '../data/data';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {Product} from '../features/ProductSlice';
import StarRating from 'react-native-star-rating-widget';
import getPriceAfterDiscount from '../helper/getDiscountPrice';
type Props = {
  item: Product;
  index: number;
};

const RenderItem = ({item, index}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('ProductDetail', {item: item});
        }}>
        <Animated.Image
          source={{uri: item.thumbnail}}
          style={styles.image}
          resizeMode={'contain'}
          sharedTransitionTag={item.id.toString()}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName} numberOfLines={1}>
            {`${item.title} (${item.brand})`}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{item.rating}</Text>
            <StarRating
              maxStars={5}
              rating={item.rating}
              onChange={()=>{}}
              starSize={19}
              starStyle={{flex: 1}}
              style={{width: 100, flexWrap: 'wrap', flexShrink: 1}}
            />
          </View>
          <Text style={styles.textDescription} numberOfLines={3}>
            {item.description}
          </Text>
          <View style={styles.priceContainer}>
            <View style={styles.priceRowContainer}>
              <Text style={styles.rupees}>₹</Text>
              <Text style={styles.priceText}>
                {getPriceAfterDiscount(
                  item.price,
                  item.discountPercentage,
                ).toFixed()}
              </Text>
            </View>

            <Text style={styles.mrpText}>
              M.R.P:
              <Text
                style={[
                  styles.mrpText,
                  {textDecorationLine: 'line-through', padding: 4},
                ]}>
                ₹{item.price}
              </Text>
            </Text>
            <Text
              style={
                styles.discountPercentageText
              }>{`(${item.discountPercentage.toFixed()}% off)`}</Text>
          </View>
          <Pressable
            style={styles.btn}>
            <Text style={
              styles.btnText
            }>Buy Now</Text>
            </Pressable>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  textContainer: {
    marginHorizontal: 20,
    flexShrink: 1,
    gap: 10,
    marginTop: 4,
  },
  textName: {
    color: '#323232',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDescription: {
    color: '#323232',
    fontSize: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'black',
  },
  priceText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 17,
  },
  mrpText: {color: 'black', fontSize: 10, fontWeight: '300'},
  discountText: {color: 'grey'},
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  rupees: {
    color: 'black',
    fontSize: 12,
    marginTop: -2,
    padding: 2,
  },
  priceRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  discountPercentageText: {
    color: 'black',
    fontSize: 10,
  },
  btn: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 10,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
