import React, { Component } from "react";
import {
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body
} from "native-base";
const commonColor = require("../../theme/variables/commonColor");

const sanket = require("../../../assets/contacts/sanket.png");
const pratik = require("../../../assets/contacts/pratik.png");

export default class Recent extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: commonColor.containerBackground }}>
        <List>
          <ListItem>
            <Left>
              <Thumbnail small source={sanket} />
              <Body>
                <Text>Kumar Sanket</Text>
                <Text note>8861522489</Text>
              </Body>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Thumbnail small source={pratik} />
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>8861522489</Text>
              </Body>
            </Left>
          </ListItem>
        </List>
      </Content>
    );
  }
}
