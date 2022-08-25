import React from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
// const image = "../assets/wallpaper.jpg";
const Home = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "../assets/splash.png",
        }}
        resizeMode="stretch"
        style={{
          height: screenHeight,
          width: screenWidth,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0D98BA",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "600",
            marginBottom: 20,
            // fontFamily: "Helvetica"
          }}
        >
          VIRTUAL CARE
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginBottom: 8,
          }}
        >
          Calculate your family vitals!
        </Text>
        <View style={{}}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                padding: 8,
                borderColor: "black",
                justifyContent: "center",
                // backgroundColor: "red",
                alignContent: "center",
                alignItems: "center",
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
      </ImageBackground>
    </View>
  );
};

export default Home;
