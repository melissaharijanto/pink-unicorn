import React from "react";
import { StyleSheet, View } from "react-360";
import ButtonTrigger from "./toggle-button-trigger";

/**
 * The ToggleButton component.
 *
 * @component
 * @returns {JSX.Element} The rendered ToggleButton component.
 */
const ToggleButton = () => (
   <View style={style.view}>
        <ButtonTrigger />
   </View>
);

const style = StyleSheet.create({
   view: {
      width: 500,
      justifyContent: "center",
      alignItems: "center",
   }
})

export default ToggleButton;