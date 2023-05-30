import React from "react";
import {
  VrButton,
  Text,
} from "react-360";
import { compose } from "recompose";
import { hideIfHome } from "../../providers";
import style from "./style";

/**
 * The BaseButton component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The button text.
 * @param {Object} props.textStyle - The styles for the button text.
 * @param {Function} props.buttonClick - The function to be executed when the button is clicked.
 * @returns {JSX.Element} The rendered BaseButton component.
 */
export default compose(
  hideIfHome,
)((props) => {
  const { text, textStyle } = props;
  return (
    <VrButton
      onClick={props.buttonClick}
      style={style.button}>
        <Text
          style={[
            style.textDefault,
            textStyle,
          ]}>
            {text}
        </Text>
    </VrButton>
  )
});