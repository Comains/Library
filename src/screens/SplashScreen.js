import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")}></Image>
      <Text style={styles.Letchooseyourbook}>Welcome to thuviensach!</Text>
      <Text style={styles.headers}>Read beyond limits</Text>
      <TouchableOpacity>
        <Text>
          Create account
        </Text>
      </TouchableOpacity>
    </View>
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
