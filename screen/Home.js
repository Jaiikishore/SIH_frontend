import React from "react";
import { View, Button, Text } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",

        alignItems: "center",
        backgroundColor: "#5478e4",
      }}
    >
      <Text style={{ color: "white", fontSize: 50, fontWeight: "600" }}>
        SIH
      </Text>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="continue"
        style={{
          margin: 10,
          padding: 1,
        }}
      />
    </View>
  );
};

export default Home;
