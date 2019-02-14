import React, { Component } from "react";
import {
  AsyncStorage,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Icon,
  Right,
  Drawer,
  Content,
  Card,
  CardItem,
  Item,
  Text,
  Input,
  Button,
  Spinner
} from "native-base";

import axios from "axios";

class GopaySender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      message: "Formulir Rp. 3 Rupiah GO-PAY Gratis",
      loading: false
    };
  }
  async _sendData() {
    await this.setState({ loading: true });
    fetch("https://6oj76oh3d8.execute-api.us-east-2.amazonaws.com/api/gosend", {
      method: "POST",
      body: JSON.stringify({
        phone: this.state.phone
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          message:
            this.state.phone == null
              ? "Form number harus diisi"
              : responseJson.message,
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#2ba9e9">
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" style={{ color: "#fff" }} />
            </TouchableOpacity>
          </Left>

          <Body>
            <Text style={styles.headerTitle}>Go-Pay Sender</Text>
          </Body>
          <Right>
            {/* <TouchableOpacity>
              <Icon name="globe" style={{ color: "#fff" }} />
            </TouchableOpacity> */}
          </Right>
        </Header>

        <Content padder>
          <Card>
            <CardItem header bordered style={{ height: 40 }}>
              <Image
                style={{ width: "7%", resizeMode: "contain" }}
                source={require("../image/fav.png")}
              />
              <Text style={{ color: "#2ba9e9", paddingLeft: 5 }}>
                GoPay Sender
              </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{
                  color:
                    this.state.message == "Telah Berhasil Dikirim"
                      ? "#2ba9e9"
                      : "#e74c3c"
                }}
              >
                {this.state.message}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item regular style={{ borderRadius: 4 }}>
                  <Input
                    placeholder="6282214899xxx"
                    onChangeText={phone => this.setState({ phone })}
                  />
                </Item>
              </Body>

              <Button
                info
                style={{ marginLeft: 7, padding: 10, justifyContent: "center" }}
                onPress={() => this._sendData()}
              >
                {this.state.loading == true ? (
                  <Spinner
                    color="white"
                    style={{ marginLeft: 10, justifyContent: "center" }}
                  />
                ) : (
                  <Icon name="send" />
                )}
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Icon name="information-circle" />
              <Text
                style={{
                  color: "#2ba9e9"
                }}
              >
                Informasi
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Harap dibaca sampai habis informasi dibawah ini:</Text>
                <Text style={{ paddingTop: 5, fontWeight: "bold" }}>
                  1. Bisa mengirim ke nomor operator Indonesia dan Luar Negeri
                  Format menginput nomor yang benar (62812xxxxxxxx - Indonesia)
                  (1253xxxxxxx - United States)
                </Text>
                <Text style={{ paddingTop: 5, fontWeight: "bold" }}>
                  2. Nomor yang sama hanya dapat menerima GO-PAY 1x dalam sehari
                </Text>
                <Text style={{ paddingTop: 5, fontWeight: "bold" }}>
                  3. Jika ada pertanyaan dan masukkan, silakan kontak ke:
                  oojinyali@gmail.com atau amin4udin@gmail.com Gratis sampai
                  kapanpun dan untuk siapapun
                </Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => {
                Linking.openURL("http://gopaysender.com");
              }}
            >
              <Text>Thanks to : </Text>
              <Text
                style={{
                  color: "#2ba9e9"
                }}
              >
                gopaysender.com
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
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

export default GopaySender;
