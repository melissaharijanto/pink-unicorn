import React from "react";
import { View, Text } from "react-360";
import { lessons } from "../../../../consts";
import { hideIfHome, usingAppContext } from "../../../../providers";
import { compose } from "recompose";
import style from "./style";

export default compose(
  usingAppContext,
  hideIfHome
)(({ selectedLesson }) => {
  const text = lessons[selectedLesson - 1].mantra;
  return <Text style={[style.text, { 
    backgroundColor: lessons[selectedLesson - 1].headingColor,
    color: lessons[selectedLesson - 1].textColor
  }]}>{text}</Text>;
});
