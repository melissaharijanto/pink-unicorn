import React from "react";
import { BaseButton } from "../../../../components";
import style from "./style";

/**
 * Represents the lesson button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {Function} props.buttonClick - The function to handle button click.
 * @param {number} props.selectedLesson - The selected lesson index.
 * @returns {JSX.Element} The JSX element representing the lesson button component.
 */
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
