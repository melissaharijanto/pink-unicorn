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
        <Text style={style.paragraph}>An apple a day keeps the doctor away!</Text>
      </View>
    );
  }
}

export default ButtonContent;
