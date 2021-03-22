import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {Main, Recordings} from '../screens';

const Stack = createStackNavigator();
export default function Navigation() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          options={{headerShown: false}}
          component={Main}
        />
        <Stack.Screen
          name="Recordings"
          options={{headerShown: false}}
          component={Recordings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
