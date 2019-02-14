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
import { Col, Row } from "react-native-easy-grid";

import SideBarComponent from "./component/sidebar";

export default class IndexReact extends Component {
  state = {
    url: "http://www.an-creator.id/"
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  webView = {
    canGoBack: false,
    ref: null
  };

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
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
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBarComponent navigate={this.props.navigation.navigate} />}
        onClose={() => this.closeDrawer()}
      >
        <View style={{ flex: 1 }}>
          <Header style={styles.header} androidStatusBarColor="#2ba9e9">
            <Left>
              <TouchableOpacity onPress={() => this.openDrawer()}>
                <Icon name="md-menu" style={{ color: "#fff" }} />
              </TouchableOpacity>
            </Left>

            <Body>
              <Text style={styles.headerTitle}>An Creator</Text>
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
            ref={webView => {
              this.webView.ref = webView;
            }}
            renderLoading={this.renderLoadingView}
            onNavigationStateChange={navState => {
              this.webView.canGoBack = navState.canGoBack;
            }}
          />
        </View>
      </Drawer>
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
