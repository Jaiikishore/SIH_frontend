import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";

const Prediction = ({ route }) => {
  const singleFile = route.params;
  // const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  /* const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "http://10.0.2.2:5000/get"; //api url
    fetch(url, { method: "GET" })
      .then((resp) => resp.json()) //calling url by method GET
      .then((resp) => setPosts(resp)) //setting response to state posts
      .catch((error) => console.log("fetchToken error: ", error));
  }, []); */

  const sendVideo = async () => {
    try {
      // if (singleFile != null) {
      console.log("in sendVideo");
      //If file selected then create FormData
      const fileToUpload = singleFile;
      const data1 = new FormData();
      data1.append("file", fileToUpload);
      console.log("set formdata");
      let response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: data1,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const json = await response.json();
      setData(json.heartrate);
      // }
    } catch (error) {
      console.error(error);
    } /* finally {
     setLoading(false);
   } */
  };
  useEffect(() => {
    sendVideo;
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
      <Text>{data}</Text>

      {/* <View>
        {posts.map((post) => (
          <Text key={post.id}>{`${post.id}. ${post.title}`}</Text>
        ))}
      </View> */}
    </View>
  );
};
export default Prediction;
