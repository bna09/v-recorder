import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {AppText} from './index';
import {Color} from '../utils';
import Icon from './icon';

const RecordBox = ({
  record,
  onRowPress,
  expand,
  deleteRecord,
  startPlaying,
  isPlaying,
  playTime,
}) => {
  return (
    <View style={styles.recordBox}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('transparent')}
        onPress={() => onRowPress(record.name)}>
        <View style={styles.recordWrap}>
          <AppText style={styles.recordTitle}>{record.name}</AppText>
          <AppText style={styles.recordTime}>
            {isPlaying ? playTime : record.duration}
          </AppText>
        </View>
      </TouchableNativeFeedback>
      {expand && (
        <View style={styles.recordAssets}>
          <TouchableNativeFeedback
            useForeground={true}
            background={TouchableNativeFeedback.Ripple('rgba(153,159,151,0.2)')}
            onPress={() => startPlaying(record)}>
            <View style={styles.recordIcon}>
              {!isPlaying && (
                <Icon name="play" size={16} color={Color.primary} />
              )}
              {isPlaying && (
                <Icon name="pause" size={16} color={Color.primary} />
              )}
            </View>
          </TouchableNativeFeedback>
          <View style={styles.recordAssetsRight}>
            <TouchableNativeFeedback
              useForeground={true}
              background={TouchableNativeFeedback.Ripple(
                'rgba(153,159,151,0.2)',
              )}
              onPress={deleteRecord}>
              <View style={styles.recordIcon}>
                <Icon name="delete" size={16} color={Color.red_color} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      )}
    </View>
  );
};
export default RecordBox;

const styles = StyleSheet.create({
  recordBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: Color.light_color,
    borderRadius: 10,
    marginBottom: 10,
  },
  recordWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  recordTitle: {
    fontSize: 16,
    width: '80%',
  },
  recordTime: {
    width: '20%',
    textAlign: 'right',
    fontSize: 15,
    color: Color.grey_color,
    paddingTop: 3,
    flexShrink: 0,
  },
  recordAssets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordAssetsRight: {
    flexDirection: 'row',
  },
  recordIcon: {
    width: 40,
    height: 40,
    borderRadius: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
