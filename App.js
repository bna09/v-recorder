import React, {useEffect, useState} from 'react';
import {StatusBar, PermissionsAndroid} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/configs/navigation';
import {PermissionError} from './src/components/ui';

const App = () => {
  const [audioStatus, setAudioStatus] = useState('');
  const [storageStatus, setStorageStatus] = useState('');

  const permission = (type, permissionType) => {
    return PermissionsAndroid.request(permissionType).then(d => {
      if (type === 'audio') {
        setAudioStatus(d);
      } else {
        setStorageStatus(d);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      permission('audio', PermissionsAndroid.PERMISSIONS.RECORD_AUDIO).then(
        () => {
          permission(
            'storage',
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
        },
      );
    }, 500);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {(audioStatus && audioStatus !== 'granted') ||
      (storageStatus && storageStatus !== 'granted') ? (
        <PermissionError />
      ) : (
        <Navigation />
      )}
    </>
  );
};

export default App;
