// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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

import * as ScreenOrientation from "expo-screen-orientation";

const Landing = ({ navigation }) => {
  const act_email = "";
  const act_password = "";
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

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/healthcare.png")}
      />
      <Button style={styles.loginBtn} title="Open Camera" onPress={verify} />
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
    maxWidth: 90,
    maxHeight: 90,
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

export default Landing;
