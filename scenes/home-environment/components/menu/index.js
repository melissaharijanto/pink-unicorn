import React from "react";
import { hideIf, usingAppContext } from "../../../../providers";
import { compose } from "recompose";
import { View } from "react-360";
import style from "./style";

/**
 * Represents the menu component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.selectedLesson - The selected lesson index.
 * @param {ReactNode} props.children - The child elements to be rendered within the menu.
 * @returns {JSX.Element} The JSX element representing the menu component.
 */
const MenuComponent = ({ selectedLesson, children }) => {
  return (
    <View style={style.view}>
      {children}
    </View>
  );
};

const hideMenu = hideIf(({ selectedLesson }) => selectedLesson !== 4);

export default compose(
  usingAppContext,
  hideMenu,
)(MenuComponent);
