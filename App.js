import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import BmiCalculator from './app/screens/BmiCalculator';
import { SafeAreaView } from 'react-native';
import SafeViewAndroid from './app/components/SafeViewAndroid/SafeViewAndroid';

import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from '@expo-google-fonts/inter/useFonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    heading: Inter_600SemiBold,
    body: Inter_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <BmiCalculator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
