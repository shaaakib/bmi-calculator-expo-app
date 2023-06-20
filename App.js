import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BmiCalculator from './app/screens/BmiCalculator';
import { SafeAreaView } from 'react-native';
import SafeViewAndroid from './app/components/SafeViewAndroid/SafeViewAndroid';

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <BmiCalculator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
