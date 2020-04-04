import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import LandingPage from './src/views/landingPage'
import store from './src/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <LandingPage />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
