import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";

const Prediction = ({ route }) => {
  const { singleFile } = route.params;
  // const [isLoading, setLoading] = useState(true);
  const [heartdata, setHeartData] = useState(null);
  const [breathdata, setBreathData] = useState(null);

  /* const [posts, setPosts] = useState([]);
  useEffect(() => {
    // const url = "http://10.0.2.2:5000/get"; //api url
    const url = "http://192.168.43.37:8080/get";
    fetch(url, { method: "GET" })
      .then((resp) => resp.json()) //calling url by method GET
      .then((resp) => setPosts(resp)) //setting response to state posts
      .catch((error) => console.log("fetchToken error: ", error));
  }, []); */

  const sendVideo = async () => {
    /* try { */
    // if (singleFile != null) {
    // console.log(singleFile);
    const fileToUpload = singleFile;
    const data1 = new FormData();
    data1.append("file", {
      name: "something.mp4",
      uri: fileToUpload.uri,
      type: "video/mp4",
    });
    // let response = await fetch("http://192.168.43.37:8080/upload", {
    let response = await fetch("http://192.168.159.37:8080/upload", {
      method: "post",
      body: data1,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const json1 = await response.json();
    console.log(json1);
    setHeartData(Number(json1.heartrate.toFixed(1)));
    setBreathData(Number(json1.breathingrate.toFixed(2)));

    /* finally {
    // }
    /* } catch (error) {
      console.error(error);
    } */
    /* setLoading(false);
   } */
  };
  useEffect(() => {
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
      <Text>Prediction View</Text>
      <Text>HR : {heartdata}</Text>

      <Text>BR : {breathdata}</Text>

      {/* <View>
        {posts.map((post) => (
          <Text key={post.id}>{`${post.id}. ${post.title}`}</Text>
        ))}
      </View> */}
    </View>
  );
};
export default Prediction;
