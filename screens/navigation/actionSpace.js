import React, { Component } from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";
import NavBase from "./NavigationBase";

const IMAGE = require("../../images/outside.jpg");
const IMAGE_WIDTH = 3382;
const IMAGE_HEIGHT = 1611;
const screen = Dimensions.get("window");

class ActionSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webData: 'https://ekf.viko.lt',
    };
  }

  Data = 'https://ekf.viko.lt/';

  getScreenWidth = () => {
    return (IMAGE_WIDTH / IMAGE_HEIGHT) * screen.height;
  };

  resizeWidth = (w) => {
    return (w * this.getScreenWidth()) / IMAGE_WIDTH;
  };

  resizeHeight = (h) => {
    return (h * screen.height) / IMAGE_HEIGHT;
  };

  navigateInside = () => {
    this.props.navigation.navigate('lift');
  };

  render() {
    return (
      <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        <TouchableOpacity
          onPress={() => {
            this.navigateInside();
          }}
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: 10,
            position: "absolute",
            top: this.resizeHeight(766),
            left: this.resizeWidth(1520),
            width: this.resizeWidth(310),
            height: this.resizeHeight(400),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            I liftą!
          </Text>
        </TouchableOpacity>


      </NavBase>
    );
  }
}

export default ActionSpace;
