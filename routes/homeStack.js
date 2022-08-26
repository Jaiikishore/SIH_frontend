import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screen/Home";
import Camera from "../screen/Camera";
import Login from "../screen/login";
import Prediction from "../screen/Prediction";
import Landing from "../screen/Landing";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
    },
  },
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: "Landing",
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      title: "Camera",
    },
  },
  Prediction: {
    screen: Prediction,
    navigationOptions: {
      title: "Prediction",
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#ffff",
    headerStyle: { backgroundColor: "#3454b4", height: 100 },
  },
});

export default createAppContainer(HomeStack);
