import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Body,
  Text,
  Header,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Button,
  List,
  ListItem
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SideBarComponent extends Component {
  state = {
    name: "Marian Hart",
    position: " Director Of Project Management",
    school: "Syncaus university - New York",
    friend: "Greater San Diego Area",
    note:
      "I'm a renewable energy executive with 10 years experience, and have built strong skills in getting comp"
  };

  render() {
    return (
      <Container style={{ height: "100%", backgroundColor: "white" }}>
        <Content>
          <ImageBackground
            style={{ height: 150 }}
            source={require("../image/kyo.jpg")}
          />

          <Button
            light
            style={{ paddingTop: 10 }}
            onPress={() => this.props.navigate("GopaySender")}
          >
            <Body
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 12,
                paddingRight: 12
              }}
            >
              <Text note style={{ color: "#2ba9e9" }}>
                GoPay Sender
              </Text>
              <Image
                style={{ width: "7%", resizeMode: "contain" }}
                source={require("../image/fav.png")}
              />
            </Body>
          </Button>

          <Button
            info
            style={{ paddingTop: 10 }}
            onPress={() => this.props.navigate("AboutUs")}
          >
            <Body
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 12,
                paddingRight: 12
              }}
            >
              <Text note style={{ color: "white" }}>
                About Us
              </Text>
              <Icon name="ios-arrow-dropright-circle-outline" />
            </Body>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  thumbImg: {
    marginBottom: 20,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 100
  }
});
