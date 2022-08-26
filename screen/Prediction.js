import React, { useState, useEffect } from "react";
import { View, Button, Text, Alert, ActivityIndicator } from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
const Prediction = ({ navigation, route }) => {
  const { singleFile } = route.params;
  // const [isLoading, setLoading] = useState(true);
  const [heartdata, setHeartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [breathdata, setBreathData] = useState(null);

  /* const [posts, setPosts] = useState([]);
  useEffect(() => {
    // const url = "http://10.0.2.2:5000/get"; //api url
    const url = "http://192.168.43.37:8080/get";
    fetch(url, { method: "GET" })
      .then((resp) => resp.json()) //calling url by method GET
      .then((resp) => setPosts(resp)) //setting response to state posts
      .catch((error) => console.log("fetchToken error: ", error));
  }, []); */
  const showAlert = () => {
    Alert.alert("FACE NOT DETECTED:", "Show Face to Measure Vitals", [
      { text: "OK" },
    ]);
    navigation.navigate("Landing");
  };

  const sendVideo = async () => {
    try {
      // if (singleFile != null) {
      // console.log(singleFile);
      const fileToUpload = singleFile;
      const data1 = new FormData();
      data1.append("file", {
        name: "something.mp4",
        uri: fileToUpload.uri,
        type: "video/mp4",
      });
      let response = null;
      // let response = await fetch("http://192.168.43.37:8080/upload", {
      response = await fetch("http://192.168.159.37:8080/upload", {
        //chan
        // let response = await fetch("http://192.168.30.37:8080/upload", {
        //raks
        method: "post",
        body: data1,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const json1 = await response.json();
      // console.log(response);
      setHeartData(Number(json1.heartrate.toFixed(1)));
    } catch (error) {
      // console.log(error);
      showAlert();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    setIsLoading(true);
    sendVideo();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 15 }}>Predicting...</Text>
        </View>
      ) : (
        <View>
          <Text>Prediction</Text>
          <Text>HR : {heartdata}</Text>
        </View>
      )}

      {/* <Text>BR : {breathdata}</Text> */}

      {/* <View>
        {posts.map((post) => (
          <Text key={post.id}>{`${post.id}. ${post.title}`}</Text>
        ))}
      </View> */}
    </View>
  );
};
export default Prediction;
