import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
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
      <View style={{}}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              padding: 8,
              borderColor: "black",
              // backgroundColor: "red",
              borderRadius: 10,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#2EE59D",
              // boxShadow: "1px 150px 20px black",
              // shadowColor: "rgba(46, 229, 157, 0.4)",
              shadowOpacity: 1.5,
              elevation: 5,
              margin: 10,
              // shadowRadius: 20,
              // shadowOffset: { width: 1, height: 1 },
              // backgroundColor: "#2EE59D",
              // color: "#FFFFFF",
              shadowColor: "#171717",
              // shadowOffset: {width: -2, height: 4},
              // shadowOpacity: 0.2,
              // shadowRadius: 3,
            }}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              padding: 8,
              borderColor: "black",
              borderRadius: 10,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#2EE59D",
              shadowOpacity: 1.5,
              elevation: 5,
              margin: 5,
              shadowColor: "#171717",
            }}
          >
            REGISTRATION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
