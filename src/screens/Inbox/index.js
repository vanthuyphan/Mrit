import React, {Component} from "react";
import {ImageBackground, View} from "react-native";
import {connect} from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import styles from "./style";
import data from "./data.js";

const glow2 = require("../../../assets/glow2.png");

class Inbox extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={glow2} style={styles.containerImage}>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => navigation.navigate("DrawerOpen")}
              >
                <Icon active name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Inbox</Title>
            </Body>
            <Right />
          </Header>

          <Content padder style={{paddingTop: 0}}>
            <Card
              style={styles.card}
              dataArray={data}
              renderRow={dataRow =>
                <View style={styles.cardView}>
                  <CardItem style={styles.cardHeader} header>
                    <Left>
                      <Thumbnail small source={dataRow.thumbnail} />
                      <Body>
                        <Text style={{fontWeight: "bold"}}>
                          {dataRow.userName}
                        </Text>
                        <Text note>
                          {dataRow.note}
                        </Text>
                      </Body>
                    </Left>

                    <Right>
                      <Text note style={styles.date}>
                        {dataRow.date}
                      </Text>
                    </Right>
                  </CardItem>
                  <CardItem bordered style={styles.cardItem}>
                    <Text style={{color: "#ebeded"}}>
                      {dataRow.text}
                    </Text>
                  </CardItem>
                </View>}
            />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect()(Inbox);
