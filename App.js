/* import React from "react";
import Navigator from "./routes/homeStack";

export default function App() {
  return <Navigator style={{ backgroundColor: "#5478e4" }} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
/* import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import * as blazeface from "@tensorflow-models/blazeface";
import * as jpeg from "jpeg-js";
export default function App() {
  const [imageLink, setImageLink] = useState(
    "https://raw.githubusercontent.com/ohyicong/masksdetection/master/dataset/without_mask/142.jpg"
    // "https://media.istockphoto.com/photos/man-wearing-medical-mask-showing-the-thumbs-up-picture-id1310896477?b=1&k=20&m=1310896477&s=170667a&w=0&h=V5HvVm5U4U9q9wrHwBHFp-qW4EU-8XAK8thI54mP_A4="
  );
  const [isEnabled, setIsEnabled] = useState(true);
  const [faces, setFaces] = useState([]);
  const [faceDetector, setFaceDetector] = useState("");
  const [maskDetector, setMaskDetector] = useState("");
  useEffect(() => {
    async function loadModel() {
      console.log("[+] Application started");
      //Wait for tensorflow module to be ready
      const tfReady = await tf.ready();
      console.log("[+] Loading custom mask detection model");
      //Replce model.json and group1-shard.bin with your own custom model
      const modelJson = require("./assets/model/model.json");
      const modelWeight = await require("./assets/model/group1-shard.bin");
      const maskDetector = await tf.loadLayersModel(
        bundleResourceIO(modelJson, modelWeight)
      );
      console.log("[+] Loading pre-trained face detection model");
      //Blazeface is a face detection model provided by Google
      const faceDetector = await blazeface.load();
      //Assign model to variable
      setMaskDetector(maskDetector);
      setFaceDetector(faceDetector);
      console.log("[+] Model Loaded");
    }
    loadModel();
  }, []);
  function imageToTensor(rawImageData) {
    //Function to convert jpeg image to tensors
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
  }
  const getFaces = async () => {
    try {
      console.log("[+] Retrieving image from link :" + imageLink);
      const response = await fetch(imageLink, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = imageToTensor(rawImageData).resizeBilinear([
        224, 224,
      ]);
      const faces = await faceDetector.estimateFaces(imageTensor, false);
      var tempArray = [];
      //Loop through the available faces, check if the person is wearing a mask.
      for (let i = 0; i < faces.length; i++) {
        let color = "red";
        let width = parseInt(faces[i].bottomRight[1] - faces[i].topLeft[1]);
        let height = parseInt(faces[i].bottomRight[0] - faces[i].topLeft[0]);
        let faceTensor = imageTensor.slice(
          [parseInt(faces[i].topLeft[1]), parseInt(faces[i].topLeft[0]), 0],
          [width, height, 3]
        );
        faceTensor = faceTensor
          .resizeBilinear([224, 224])
          .reshape([1, 224, 224, 3]);
        let result = await maskDetector.predict(faceTensor).data();
        //if result[0]>result[1], the person is wearing a mask
        if (result[0] > result[1]) {
          color = "green";
        }
        tempArray.push({
          id: i,
          location: faces[i],
          color: color,
        });
      }
      setFaces(tempArray);
      console.log("[+] Prediction Completed");
    } catch {
      console.log("[-] Unable to load image");
    }
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="image link"
        onChangeText={(inputText) => {
          console.log(inputText);
          setImageLink(inputText);
          const elements = inputText.split(".");
          if (
            elements.slice(-1)[0] == "jpg" ||
            elements.slice(-1)[0] == "jpeg"
          ) {
            setIsEnabled(true);
          } else {
            setIsEnabled(false);
          }
        }}
        value={imageLink}
        containerStyle={{ height: 40, fontSize: 10, margin: 15 }}
        inputContainerStyle={{
          borderRadius: 10,
          borderWidth: 1,
          paddingHorizontal: 5,
        }}
        inputStyle={{ fontSize: 15 }}
      />
      <View style={{ marginBottom: 20 }}>
        <Image
          style={{
            width: 224,
            height: 224,
            borderWidth: 2,
            borderColor: "black",
            resizeMode: "contain",
          }}
          source={{
            uri: imageLink,
          }}
          PlaceholderContent={<View>No Image Found</View>}
        />
        <Svg height="224" width="224" style={{ marginTop: -224 }}>
          {faces.map((face) => {
            return (
              <Rect
                key={face.id}
                x={face.location.topLeft[0]}
                y={face.location.topLeft[1]}
                width={face.location.bottomRight[0] - face.location.topLeft[0]}
                height={face.location.bottomRight[1] - face.location.topLeft[1]}
                stroke={face.color}
                strokeWidth="3"
                fill=""
              />
            );
          })}
        </Svg>
      </View>
      <Button
        title="Predict"
        onPress={() => {
          getFaces();
        }}
        style={{ backgroundColor: "white", color: "#0000" }}
        disabled={!isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5478e4",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screen/Home";
import Camera from "./screen/Camera";
import Prediction from "./screen/Prediction";
import Login from "./screen/login";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Prediction" component={Prediction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
