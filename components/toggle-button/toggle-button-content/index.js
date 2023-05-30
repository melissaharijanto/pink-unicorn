import React from "react";
import { View, Text } from "react-360";
import style from "./style";

/**
 * The ButtonContent component.
 *
 * @component
 * @returns {JSX.Element} The rendered ButtonContent component.
 */
class ButtonContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={style.view}>
        <Text style={style.text}>Did you know?</Text>
        <Text style={style.paragraph}>One fun fact about the Mars rover is that the Curiosity rover, which landed on Mars in 2012, carries a small piece of fabric from the famous Wright brothers' airplane, the Wright Flyer.</Text>
      </View>
    );
  }
}

export default ButtonContent;
