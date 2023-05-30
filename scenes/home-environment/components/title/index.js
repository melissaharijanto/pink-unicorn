import React from "react";
import { View, Text } from "react-360";
import style from "./style";

/**
 * Represents the title component.
 *
 * @function Title
 * @returns {JSX.Element} The JSX element representing the title component.
 */
const Title = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Welcome to Classroom360!</Text>
    </View>
  );
};

export default Title;
