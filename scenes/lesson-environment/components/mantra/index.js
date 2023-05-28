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
  const lesson = lessons[selectedLesson - 1];
  const text = lesson.mantra;

  return (
    <View>
      <Text
        style={[
          style.text,
          {
            backgroundColor: lesson.headingColor,
            color: lesson.textColor,
          },
        ]}
      >
        {text}
      </Text>
      <View style={style.view}>
        <Text style={style.content}>{lesson.introduction}</Text>
      </View>
    </View>
  );
});
