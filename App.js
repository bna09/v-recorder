/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import RNBootSplash from "react-native-bootsplash";

const App = () => {
    useEffect(()=>{
        RNBootSplash.hide({ fade: true });
    },[])
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content"/>
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;
