import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  WebView,
  Platform,
  Image,
  Linking,
  BackHandler,
  ActivityIndicator
} from "react-native";
import { Header, Left, Body, Icon, Right, Drawer } from "native-base";

export default class AboutUs extends Component {
  state = {
    url: "https://www.an-creator.id/p/about-us.html"
  };

  onAndroidBackPress = () => {
    this.props.navigation.goBack();
  };

  componentWillMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener(
        "hardwareBackPress",
        this.onAndroidBackPress
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#2ba9e9" />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={styles.header} androidStatusBarColor="#2ba9e9">
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" style={{ color: "#fff" }} />
            </TouchableOpacity>
          </Left>

          <Body>
            <Text style={styles.headerTitle}>About Us</Text>
          </Body>
          <Right>
            {/* <TouchableOpacity>
              <Icon name="globe" style={{ color: "#fff" }} />
            </TouchableOpacity> */}
          </Right>
        </Header>

        <WebView
          source={{ uri: this.state.url }}
          startInLoadingState={true}
          scalesPageToFit={false}
          renderLoading={this.renderLoadingView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    backgroundColor: "#2ba9e9"
  },
  headerTitle: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    justifyContent: "center"
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
