import {Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native';
import React, { memo } from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Button = () => {
  const {width} = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      //@ts-ignore
      style={[
        styles.container,
        {width: width * 0.9, marginBottom: inset.bottom},
      ]}
      entering={FadeInDown.delay(600)}
      onPress={() => {
        console.log('BOOKING NOW');
      }}>
      <Text style={styles.text}>Buy Now</Text>
    </AnimatedPressable>
  );
};

export default memo( Button);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8C00',
    padding: 22,
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 20,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
