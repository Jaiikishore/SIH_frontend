// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const act_email = "Abc";
  const act_password = "Abc";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verify = () => {
    if (email == act_email && act_password == password) {
      navigation.navigate("Camera");
    } else if (email != act_email || act_password != password) {
      Alert.alert(
        "ERROR LOGIN",
        "Wrong emaild Id or password.Type correct details",
        [
          {
            text: "OK",
            onPress: () => {
              setPassword("");
              setEmail("");
            },
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/favicon.png")} />

      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button style={styles.loginBtn} title="Log In" onPress={verify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default Login;
