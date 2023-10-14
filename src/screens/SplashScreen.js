import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")}></Image>
      <Text style={styles.Letchooseyourbook}>Welcome to thuviensach!</Text>
      <Text style={styles.headers}>Read beyond limits</Text>
      <TouchableOpacity style={styles.button}>
        <Text>
          Create account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Text>
          Log In as guest
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
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    width: "90%",
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#EF5A5A"
  } 
});
