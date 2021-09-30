import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WebBrowser from "../components/WebBrowser";
import Task from "./Task";



class WebToCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { dataToPass } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={{ flex: 1 }}>
          <WebBrowser outsideuri={dataToPass} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WebToCheck;
