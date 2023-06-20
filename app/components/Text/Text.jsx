import { Text as RNText } from 'react-native';
import React from 'react';
import { presets } from './text.preset';
import { colors } from '../../theme/colors';

export default function Text({
  children,
  customStyles,
  preset = 'body',
  centered,
}) {
  const textStyle = presets[preset];
  return (
    <RNText
      style={[
        textStyle,
        styles.text,
        centered && styles.centered,
        customStyles,
      ]}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.gunmetals,
  },
  centered: {
    textAlign: 'center',
  },
});
