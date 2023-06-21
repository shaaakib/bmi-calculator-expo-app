import { Image, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../theme/images';
import { metrics } from '../theme/metrics';
import Text from '../components/Text/Text';

export default function BmiCalculator() {
  return (
    <LinearGradient
      colors={['#D6E6FE', 'rgba(214, 252, 254, 0)']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      {/* Top title and desc */}
      <View>
        <View>
          <View style={styles.logo}>
            <Image source={images.icons} />
          </View>
          <View style={styles.MainTitle}>
            <Text customStyles={{ textAlign: 'center' }} preset="headingXXL">
              Body Mass Index Calculator
            </Text>
          </View>
          <View style={styles.MainTitle}>
            <Text customStyles={{ textAlign: 'center' }} preset="body">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Text>
          </View>
        </View>

        {/* bmi calculation */}
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
    marginTop: metrics.spacing.xl,
  },
  MainTitle: {
    marginTop: metrics.spacing.l,
    marginHorizontal: metrics.spacing.m,
  },
});
