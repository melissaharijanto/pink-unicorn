import React from "react";
import { View, Text, Image } from "react-360";
import style from "./style";
import { Environment, asset, NativeModules, VrButton } from "react-360";

class ButtonContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={style.view}>
        <Text style={style.text}>Did you know?</Text>
        <Text style={style.paragraph}>An apple a day keeps the doctor away!</Text>
      </View>
    );
  }
}

export default ButtonContent;
