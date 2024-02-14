import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import {Product} from '../features/ProductSlice';
import StarRating from 'react-native-star-rating-widget';
import Dots from 'react-native-dots-pagination';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(contentOffsetX / width);
    console.log('index', index);
    setActiveIndex(index);
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <View>
          <View>
            <Animated.View
              entering={FadeIn.delay(400)}
              style={styles.upperIconsContainer}>
              <View style={styles.upperDiscountIcon}>
                <Text style={styles.upperDiscountText}>{`${item.discountPercentage.toFixed()}%\noff`}</Text>
              </View>
              <View style={styles.shareIconWrapper}>
                <Icon name="share-variant" size={24} color="black" />
              </View>
            </Animated.View>

            <ScrollView horizontal onScroll={handleScroll} pagingEnabled>
              {item.images.map((image, index) => (
                <Fragment key={`image-${index}`}>
                  <Animated.Image
                    sharedTransitionTag={
                      index == 0 ? item.id.toString() : undefined
                    }
                    source={{uri: image}}
                    resizeMode={'contain'}
                    style={{width: width, height: width}}
                  />
                </Fragment>
              ))}
            </ScrollView>
            <Animated.View
              entering={FadeIn.delay(400)}
              style={[styles.lowerIcons, {top: width * 0.85}]}>
              <View style={styles.lowerHeartIcon}>
                <Icon name="heart-outline" size={24} color="black" />
              </View>
            </Animated.View>
          { item.images.length>1? <Dots
              paddingVertical={10}
              length={item.images.length}
              active={activeIndex}
              activeColor="#FF9900"
              // passiveColor="red"
            />:<></>}
            <Animated.View
              entering={FadeInDown.delay(400)}
              style={styles.textContainer}>
              <View style={styles.brandContainer}>
                <Text style={styles.brandText}>Brand:{item.brand}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <StarRating
                    maxStars={5}
                    rating={item.rating}
                    onChange={() => {}}
                    starSize={19}
                    starStyle={{flex: 1}}
                    style={{width: 100, flexWrap: 'wrap', flexShrink: 1}}
                  />
                </View>
              </View>
              <Text style={styles.productNameText}>{item.title}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.discountText}>
                  {`-${item.discountPercentage.toFixed()}%`}
                </Text>
                <Text style={styles.rupeesText}>₹</Text>
                <Text style={styles.priceText}>
                  {item.price.toLocaleString()}
                </Text>
              </View>
              <Text style={styles.deliveryDateText}>
                FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
              </Text>
              <View style={styles.locationContainer}>
                <Icon name="map-marker-outline" size={24} color="black" />

                <Text style={styles.locationText}>
                  Deliver To Balram - Pune 411052
                </Text>
              </View>

              <Text
                style={
                  item.stock > 0 ? styles.stockText : styles.emptyStockText
                }>
                {item.stock > 0
                  ? ` In Stock: ${item.stock}`
                  : `Currently out of stock`}
              </Text>
            </Animated.View>
          </View>
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

  productDetailsContainer: {},
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandText: {
    color: '#08AAE3',
    textTransform: 'capitalize',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'black',
    fontWeight: '300',
    fontSize: 12,
  },

  productNameText: {
    color: 'grey',
    flexWrap: 'wrap',
    fontSize: 12,
  },
  descriptionText: {
    color: 'grey',
    fontSize: 12,
  },
  textContainer: {
    padding: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  discountText: {
    color: 'red',
    fontSize: 32,
    fontWeight: '200',
  },
  rupeesText: {
    top: -5,
    color: 'black',
    right: -3,
    fontSize: 13,
  },
  priceText: {
    fontSize: 38,
    color: 'black',
  },
  upperIconsContainer: {
    position: 'absolute',
    right: 12,
    left: 13,
    top: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 9999,
  },
  upperDiscountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C60C30',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  upperDiscountText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    textAlignVertical: "center",
  
  },
  lowerIcons: {
    position: 'absolute',
    right: 12,
    left: 13,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 9999,
  },
  lowerHeartIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deliveryDateText: {color: '#00CED1'},
  locationContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    gap: 5,
  },
  locationText: {fontSize: 15, fontWeight: '500', color: 'black'},
  stockText: {
    color: '#00A8E1',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  emptyStockText: {
    color: 'red',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  shareIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
