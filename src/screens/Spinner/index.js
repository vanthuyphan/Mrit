import React, {Component} from "react";
import {ImageBackground} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Spinner,
  Button,
  Icon,
  ListItem,
  Left,
  Right,
  Body,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");
const glow2 = require("../../../assets/glow2.png");

export default class SpinnerNSP extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={glow2} style={styles.containerImage}>
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Spinner</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Card transparent>
              <CardItem header>
                <Text style={{color: commonColor.inverseTextColor}}>
                  Default Spinner
                </Text>
              </CardItem>
              <CardItem>
                <Left />
                <Body>
                  <ListItem style={{borderBottomWidth: 0}}>
                    <Spinner />
                  </ListItem>
                </Body>
                <Right />
              </CardItem>
              <CardItem header>
                <Text style={{color: commonColor.inverseTextColor}}>
                  Inverse Spinner
                </Text>
              </CardItem>
              <CardItem>
                <Left />
                <Body>
                  <ListItem style={{borderBottomWidth: 0}}>
                    <Spinner inverse />
                  </ListItem>
                </Body>
                <Right />
              </CardItem>
              <CardItem header>
                <Text style={{color: commonColor.inverseTextColor}}>
                  Custom Spinner
                </Text>
              </CardItem>
              <CardItem>
                <Left />
                <Body>
                  <ListItem style={{borderBottomWidth: 0}}>
                    <Spinner color={commonColor.brandDanger} />
                  </ListItem>
                </Body>
                <Right />
              </CardItem>
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
