import React from 'react';
import { TextInput as RNTextInput } from 'react-native';


import { View } from './View';
import { Icon } from './Icon';
import { Button } from './Button';
import { Colors } from '../config';

export const TextInput = ({
  width = '100%',
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.input,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 12,
        marginVertical: 12,
        width, 
      }}
    >
      {leftIconName ? (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.white}
          style={{ marginRight: 10 }}
        />
      ) : null}
      <RNTextInput
        style={{
          flex: 1,
          width: '100%',
          fontSize: 18,
          color: Colors.white
        }}
        placeholderTextColor={Colors.white}
        {...otherProps}
      />
      {rightIcon ? (
        <Button onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.white}
            style={{ marginRight: 10 }}
          />
        </Button>
      ) : null}
    </View>
  );
};
