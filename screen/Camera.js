import React, { useState, useEffect } from "react";
import { View, Button, Text, Image } from "react-native";
import { Camera } from "expo-camera";
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

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    setTakeVideoTitle("Taking...");
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 10,
      });
      setRecord(data.uri);
      setIsVideo(true);
      console.log(data.uri);
    }
    setTakeVideoTitle("Take Video");
  };

  const stopVideo = async () => {
    setTakeVideoTitle("Take Video");
    camera.stopRecording();
  };

  const callnav = () => {
    navigation.navigate("Prediction", {
      singleFile: record,
    });
  };

  if (cameraPermission === null || audioPermission === null) {
    return <View />;
  }
  if (cameraPermission === false || audioPermission === false) {
    return <Text>No Access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Camera
          ref={(ref) => setCamera(ref)}
          style={{
            flex: 1,
          }}
          type={type}
          ratio={"4:3"}
        />
      </View>
      <Button
        title="Flip Video"
        color="green"
        onPress={() => {
          setType(
            type === camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      />
      <Button title={takeVideoTitle} onPress={() => takeVideo()} />
      <Button title="Stop Video" color="red" onPress={() => stopVideo()} />
      <Button
        onPress={() => {
          isVideo ? callnav() : null;
        }}
        title="continue"
        style={{
          margin: 10,
          padding: 1,
        }}
      />

      {/* <Video
          ref={video}
          style={{
            alignSelf: "center",
            width: 220,
            height: 220,
            margin: 10,
          }}
          source={{
            uri: record,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: 20,
          }}
        >
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
    </View>
  );
};

export default CameraScreen;
