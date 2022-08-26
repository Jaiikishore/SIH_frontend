import React, { useState, useEffect } from "react";
import { View, Button, Text, Image, Alert } from "react-native";
import { Camera } from "expo-camera";
import * as ScreenOrientation from "expo-screen-orientation";
// import * as FaceDetector from "expo-face-detector";
// import { Video } from "expo-av";

const CameraScreen = ({ navigation }) => {
  const [audioPermission, setAudioPermission] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [isVideo, setIsVideo] = useState(false);
  // const video = React.useRef(null);
  // const [status, setStatus] = useState({});

  const [takeVideoTitle, setTakeVideoTitle] = useState("Take Video");
  // const [orientationIsLandscape, setOrientation] = useState(false);

  /*   async function changeScreenOrientation() {
    if (orientationIsLandscape == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else if (orientationIsLandscape == true) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  } */

  const showAlert = () => {
    Alert.alert("VIDEO NOT TAKEN", "Press 'OK' to proceed", [{ text: "OK" }]);
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const callnav = () => {
    navigation.navigate("Prediction", {
      singleFile: record,
    });
    // console.log(record);
  };

  const takeVideo = async () => {
    setTakeVideoTitle("Wait...");
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 15,
      });
      setRecord(data);
      setIsVideo(true);
    }
    setTakeVideoTitle("Taken");
    // setOrientation(!orientationIsLandscape);
    // changeScreenOrientation();

    // isVideo ? callnav() : null;
  };

  // const toggleVideo = () => {
  // setOrientation(!orientationIsLandscape);
  // changeScreenOrientation();
  // console.log("toggled" + orientationIsLandscape);
  /* setTakeVideoTitle("Take Video");
    camera.stopRecording(); */
  // };
  // changeScreenOrientation();

  if (cameraPermission === null || audioPermission === null) {
    return <View />;
  }
  if (cameraPermission === false || audioPermission === false) {
    return <Text>No Access to camera</Text>;
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: "black", flexDirection: "column" }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Camera
          ref={(ref) => setCamera(ref)}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignContent: "flex-end",
            marginLeft: 100,
            marginRight: 160,
          }}
          type={type}
          /* faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 5,
            tracking: true,
          }} */
        />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 140,
          marginRight: 40,
          right: 0,
        }}
      >
        <Button
          title="Flip Video"
          color="green"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        />
        {/* <Button
          title="Toggle Video"
          color="red"
          onPress={() => {
            toggleVideo();
          }}
        />*/}
        <Button title={takeVideoTitle} onPress={() => takeVideo()} />
        <Button
          onPress={() => {
            isVideo ? callnav() : showAlert();
          }}
          title="continue"
          style={{
            margin: 10,
            padding: 1,
          }}
        />
      </View>
    </View>
  );
};

export default CameraScreen;
