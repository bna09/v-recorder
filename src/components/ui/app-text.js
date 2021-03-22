import React from 'react';
import {Text} from 'react-native';
import {Color} from '../utils';

const fontType = {
  bold: 'Sen-Bold',
  normal: 'Sen-Regular',
};

const AppText = props => {
  let {
    font = 16,
    color = Color.text_color,
    style = {},
    center,
    type = 'normal',
  } = props;
  return (
    <Text
      style={{
        fontFamily: fontType[type],
        fontSize: font,
        color: color,
        textAlign: center ? 'center' : 'left',
        letterSpacing: -0.8,
        ...style,
      }}>
      {props.children}
    </Text>
  );
};

export default AppText;
