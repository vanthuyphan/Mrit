import React, {Component} from "react";
import {ImageBackground} from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Left,
  Right,
  Body
} from "native-base";
import AllContacts from "./allContacts";
import Favourites from "./favourites";
import Recent from "./recent";
import styles from "./styles";

const glow2 = require("../../../assets/glow2.png");

export default class Contacts extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={glow2} style={styles.containerImage}>
          <Header hasTabs style={{elevation: 0}}>
            <Left>
              <Button
                transparent
                onPress={() => navigation.navigate("DrawerOpen")}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Contacts</Title>
            </Body>
            <Right />
          </Header>

          <Tabs>
            <Tab heading="All">
              <AllContacts />
            </Tab>
            <Tab heading="Favourite">
              <Favourites />
            </Tab>
            <Tab heading="Recent">
              <Recent />
            </Tab>
          </Tabs>
        </ImageBackground>
      </Container>
    );
  }
}
