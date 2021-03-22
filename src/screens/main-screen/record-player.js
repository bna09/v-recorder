import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {AppText, Icon} from '../../components/ui';
import {Color} from '../../components/utils';

const Player = ({time, onMenuPress, isRecording, startRecording}) => {
  return (
    <View style={styles.playerBlock}>
      <AppText color={Color.grey_color}>{time}</AppText>
      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('rgba(153,159,151,0.2)')}
        onPress={startRecording}>
        <View style={styles.player}>
          {!isRecording && (
            <Icon name="resume" size={15} color={Color.primary} />
          )}
          {isRecording && <Icon name="start" size={15} color={Color.primary} />}
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('rgba(153,159,151,0.2)')}
        onPress={onMenuPress}>
        <View style={styles.right}>
          <Icon name="menu" size={15} color={Color.primary} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  playerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e7f1e7',
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  player: {
    width: 60,
    height: 60,
    borderRadius: 150,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  right: {
    width: 40,
    height: 40,
    borderRadius: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
