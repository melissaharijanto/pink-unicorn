import React from "react";
import { View, Text } from "react-360";
import { lessons } from "../../../../consts";
import { hideIfHome, usingAppContext } from "../../../../providers";
import { compose } from "recompose";
import style from "./style";

/**
 * Represents the lesson component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.selectedLesson - The selected lesson index.
 * @returns {JSX.Element} The JSX element representing the lesson component.
 */
const LessonComponent = ({ selectedLesson }) => {
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
};

export default compose(
  usingAppContext,
  hideIfHome
)(LessonComponent);
