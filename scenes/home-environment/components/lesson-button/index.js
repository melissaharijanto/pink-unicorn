import React from "react";
import { BaseButton } from "../../../../components";
import style from "./style";

const LessonButton = ({ text, buttonClick, selectedLesson }) => {
  setStyles = (styles) => {
    this.root.setNativeProps({
      style: styles,
    })
  }

  state = {
    hover: false
  }

  return (
    <BaseButton
      text={text}
      selectedLesson={selectedLesson}
      buttonClick={buttonClick}
      textStyle={style.text}
      onMouseEnter={
        () => {
          this.setStyles(style.hoverText);
          this.setState({ hover: true });
        }
      }
      onMouseLeave={
        () => {
          this.setStyles(style.text);
          this.setState({ hover: false });
        }
      }
    />
  );
};

export default LessonButton;
