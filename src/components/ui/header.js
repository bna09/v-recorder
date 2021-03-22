import React from 'react';
import {Image, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import Icon from './icon';
import {Color} from '../utils';

const Header = ({back, onBackPress}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        {back && (
          <TouchableNativeFeedback
            useForeground={true}
            background={TouchableNativeFeedback.Ripple('rgba(153,159,151,0.2)')}
            onPress={onBackPress}>
            <View style={styles.headerBack}>
              <Icon name="back" size={17} color={Color.primary} />
            </View>
          </TouchableNativeFeedback>
        )}

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.headerLogo}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerMenu: {
    width: 40,
    height: 40,
    borderRadius: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  headerBack: {
    width: 40,
    height: 40,
    borderRadius: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: -10,
    marginRight: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerLabel: {
    fontSize: 32,
    color: Color.primary,
  },
  headerLogo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
export default Header;
