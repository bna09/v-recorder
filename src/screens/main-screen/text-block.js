import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../components/ui';

const TextBlock = ({text}) => {
  return (
    <View style={styles.textBlock}>
      <AppText type="bold" style={styles.textTitle}>
        {text.name}
      </AppText>
      <AppText style={styles.text}>{text.text}</AppText>
    </View>
  );
};

export default TextBlock;

const styles = StyleSheet.create({
  textBlock: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textTitle: {
    fontSize: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: 'justify',
  },
});
