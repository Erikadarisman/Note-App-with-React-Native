/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { List, ListItem } from "native-base";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  Text,
  TextInput
} from "react-native";

//library imports
import { Container, Content, Header, Body, Button } from "native-base";

export default class CustomDrawer extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body style={{ alignItems: "center" }}>
            <Image
              style={styles.drawerImage}
              source={require("../Asset/img/a.jpg")}
            />
            <Text
              style={{
                alignSelf: "center",
                color: "#000000",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: 23,
                paddingTop: 10
              }}
            >
              Shaloom Razade
            </Text>
          </Body>
        </Header>
        <Content>
          <View style={{ marginTop: 30, paddingLeft: 30 }}>
            <Button iconLeft transparent>
              <Image
                source={require("../Asset/img/Profile.png")}
                style={{ width: 25, height: 25, marginRight: 5 }}
              />
              <Text style={{ color: "black", fontSize: 17 }}>Personal</Text>
            </Button>
            <Button iconLeft transparent>
              <TouchableOpacity />
              <Image
                source={require("../Asset/img/work.png")}
                style={{ width: 25, height: 25, marginRight: 5 }}
              />
              <Text style={{ color: "black", fontSize: 17 }}>Work</Text>
            </Button>
            <Button iconLeft transparent>
              <TouchableOpacity />
              <Image
                source={require("../Asset/img/wishlist.png")}
                style={{ width: 25, height: 25, marginRight: 5 }}
              />
              <Text style={{ color: "black", fontSize: 17 }}>Wishlist</Text>
            </Button>
            <Button
              iconLeft
              transparent
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <TouchableOpacity />
              <Image
                source={require("../Asset/img/add.png")}
                style={{ width: 25, height: 25, marginRight: 5 }}
              />
              <Text style={{ color: "black", fontSize: 17 }}>Add Category</Text>
            </Button>
          </View>
          <Modal
            transparent={true}
            animationType="fade"
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(51,51,51,0.8)",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0
                }}
              />
              <View
                style={{
                  width: "70%",
                  height: 150,
                  textAlign: "center",
                  alignSelf: "center",
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: 5,
                  elevetion: 3
                }}
              >
                <View>
                  <TextInput
                    placeholder="add category"
                    placeholderColor="#eee"
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      paddingLeft: 20,
                      borderBottomColor: "#2ED1A2",
                      borderBottomWidth: 2
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="add url image"
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      paddingLeft: 20,
                      borderBottomColor: "#2ED1A2",
                      borderBottomWidth: 2
                    }}
                  />
                </View>
                <View
                  style={{
                    alignItems: "flex-end"
                  }}
                >
                  <List>
                    <ListItem noBorder>
                      <TouchableOpacity
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
                        style={{ marginRight: 20 }}
                      >
                        <Text style={{ color: "#000", fontWeight: "600" }}>
                          Add
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
                      >
                        <Text style={{ color: "#000", fontWeight: "600" }}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </ListItem>
                  </List>
                </View>
              </View>
            </View>
          </Modal>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    height: 200,
    backgroundColor: "white"
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});
