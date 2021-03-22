import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {AppText} from '../../components/ui';
import {Color} from '../../components/utils';

const {height} = Dimensions.get('window');
const Finished = ({onPress}) => {
  return (
    <View style={styles.textBlock}>
      <View>
        <AppText type="bold" style={styles.textTitle}>
          You have done Recordings.
        </AppText>
        <TouchableNativeFeedback
          useForeground={true}
          background={TouchableNativeFeedback.Ripple('rgba(153,159,151,0.2)')}
          onPress={onPress}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>View Recordings</AppText>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default Finished;

const styles = StyleSheet.create({
  textBlock: {
    height: height / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  textTitle: {
    fontSize: 20,
    paddingVertical: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: Color.primary,
    overflow: 'hidden',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
  },
});
