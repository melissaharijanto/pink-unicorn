import React from "react";
import { StyleSheet, View } from "react-360";
import { HomeEnvironment, LessonEnvironment } from "../../scenes";
import { withAppContext } from "../../providers";

const AppContent = withAppContext(() => (
   <View style={style.view}>
        <HomeEnvironment />
        <LessonEnvironment />
   </View>
));

const style = StyleSheet.create({
   view: {
      width: 1000,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF75",
      borderRadius: 20,
   }
})

export default AppContent;