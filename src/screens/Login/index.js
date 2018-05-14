import React, {Component} from "react";
import {ImageBackground, Platform, StatusBar} from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Toast
} from "native-base";
import styles from "./styles";
import {inject, observer} from "mobx-react/native";

const commonColor = require("../../theme/variables/commonColor");
const backgroundImage = require("../../../assets/glow2.png");
const logo = require("../../../assets/logo.png");

declare type Any = any

@inject('store') @observer
export default class LoginForm extends Component {
  textInput: Any

  login() {
    if (this.props.valid) {
      this.props.navigation.navigate("Drawer");
    } else {
      Toast.show({
        text: "Enter Valid Username & Password!",
        duration: 2500,
        position: "top",
        textStyle: {textAlign: "center"}
      });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={
            Platform.OS === "android"
              ? commonColor.statusBarColor
              : "transparent"
          }
          barStyle="light-content"
        />
        <Content style={{backgroundColor: commonColor.containerBackground}}>
          <ImageBackground
            source={backgroundImage}
            style={styles.containerImage}
          >
            <ImageBackground source={logo} style={styles.logoShadowImage}>
              <View style={styles.bgView}>
                <View>
                  <Item style={styles.inputGrp}>
                    <Icon
                        active
                        name={"mail"}
                        style={{color: "#fff"}}
                    />
                    <Input
                        ref={c => (this.textInput = c)}
                        placeholderTextColor="rgba(230,230,230,0.8)"
                        style={styles.input}
                        placeholder={ "Email"}
                        defaultValue={this.props.store.lovely}
                        secureTextEntry={false}
                    />
                  </Item>
                </View>

                <View>
                  <Item style={styles.inputGrp}>
                    <Icon
                        active
                        name={"unlock"}
                        style={{color: "#fff"}}
                    />
                    <Input
                        ref={c => (this.textInput = c)}
                        placeholderTextColor="rgba(230,230,230,0.8)"
                        style={styles.input}
                        placeholder={"Password"}
                        secureTextEntry={true}
                    />
                  </Item>
                </View>


                <Button
                  light
                  transparent
                  onPress={() => this.props.navigation.navigate("Drawer")}
                  style={{
                    alignSelf: "flex-end",
                    marginBottom: Platform.OS === "ios" ? 5 : 0,
                    marginTop: Platform.OS === "ios" ? -10 : 0
                  }}
                >
                  <Text>Forgot Password</Text>
                </Button>
                <Button
                  light
                  rounded
                  block
                  style={{marginBottom: 10}}
                  onPress={() => this.login()}
                >
                  <Text style={{color: commonColor.brandPrimary}}>Login</Text>
                </Button>
                <Button
                  light
                  transparent
                  style={{alignSelf: "center"}}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text>Sign Up Here</Text>
                </Button>
              </View>
            </ImageBackground>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
