import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function CreateAccount() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo1.png")}></Image>
      <TextInput placeholder="Username" style={styles.input}></TextInput>
      <TextInput secureTextEntry={true} placeholder="Password" style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#EB5757',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 58,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 5,
    paddingStart: 29,
    marginTop: 24,
  },
  

});
