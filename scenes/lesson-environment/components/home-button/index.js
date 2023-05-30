import React from "react";
import { View } from "react-360";
import { BaseButton } from "../../../../components";
import { usingAppContext } from "../../../../providers";
import { lessons } from "../../../../consts";
import style from "./style";

/**
 * Represents the lesson button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.selectedLesson - The selected lesson index.
 * @param {Function} props.lessonClicked - The function to handle lesson click.
 * @returns {JSX.Element} The JSX element representing the lesson button component.
 */
const HomeButton = ({ selectedLesson, lessonClicked }) => {
  return (
    <View style={style.view}>
      <BaseButton
        selectedLesson={selectedLesson}
        buttonClick={() => {
          lessonClicked(4);
        }}
        text={lessons[3].text}
        textStyle={style.text}
      />
    </View>
  );
};

export default usingAppContext(HomeButton);
