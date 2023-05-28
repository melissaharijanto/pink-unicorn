import React from "react";
import { BaseButton } from "../../../../components";
import style from "./style";

const LessonButton = ({ text, buttonClick, selectedLesson }) => {
  return (
    <BaseButton
      text={text}
      selectedLesson={selectedLesson}
      buttonClick={buttonClick}
      textStyle={style.text}
    />
  );
};

export default LessonButton;
