import React from 'react';
import {View} from 'react-native';
import {AppText} from './index';

const PermissionError = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <AppText>
        You need permission of microphone and storage to run this app.
      </AppText>
    </View>
  );
};
export default PermissionError;
