/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SharedElementNavigator from './src/navigator/SharedElementNavigator';
import Home from './src/screen/products/Products';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Toast from './src/components/Toast/src/components/Toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { setToastRef } from './src/components/Toast/src/utils/ToastUtils';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const toastRef = useRef();
  useEffect(() => {
    setToastRef(toastRef);
  }, [toastRef]);

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar backgroundColor={'#00A8E1'} animated />
          <SharedElementNavigator />
          <Toast ref={toastRef} />
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
