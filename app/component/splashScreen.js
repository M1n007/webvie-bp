import React, { Component } from "react";
import { AsyncStorage, ImageBackground, Text, View } from "react-native";
import { Header, Left, Body, Icon, Right, Drawer } from "native-base";

class SplashScreen extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("IndexReact");
    }, 2000);
  }

  render() {
    return (
      <View
        // source={require("../../assets/SPLASH.png")}
        style={{ width: "100%", height: "100%", backgroundColor: "#2ba9e9" }}
      />
    );
  }
}

export default SplashScreen;
