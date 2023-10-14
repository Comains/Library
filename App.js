import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import CreateAccount from './src/screens/CreateAccount';

export default function App() {
  return (
    <SplashScreen></SplashScreen> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF5A5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Letchooseyourbook: {
    fontSize: 42,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  headers: {
    fontSize: 20,
    color: "#FFFFFF",
  }
});
