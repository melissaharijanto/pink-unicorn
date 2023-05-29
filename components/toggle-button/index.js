import React from "react";
import { StyleSheet, View } from "react-360";
import ButtonContent from "./toggle-button-content"
import { withAppContext } from "../../providers";

const ToggleButton = () => (
   <View style={style.view}>
        <ButtonContent />
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