import { Image, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../theme/images';

export default function BmiCalculator() {
  return (
    <LinearGradient
      colors={['#D6E6FE', 'rgba(214, 252, 254, 0)']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <View>
        <View style={styles.logo}>
          <Image source={images.icons} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
