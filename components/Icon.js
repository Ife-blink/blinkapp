import React from 'react';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';


export const Icon = ({ name, size, color, style }) => {
 
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    /> 
  );
};
