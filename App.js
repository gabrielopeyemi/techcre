/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Onboarding from './src/screens/Onboarding';
import HomeStack from './src/routes/HomeStack';

const App: () => React$Node = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default App;
