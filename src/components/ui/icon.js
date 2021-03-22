import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';

const Ico = createIconSetFromIcoMoon(icoMoonConfig, 'Icomoon', 'icomoon.ttf');
const Icon = ({name = 'start', size = 20, color = '#07294d'}) => (
  <Ico name={name} size={size} color={color} />
);
export default Icon;
