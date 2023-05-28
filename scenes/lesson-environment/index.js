import React from "react";
import { View } from "react-360";
import { Mantra, HomeButton } from "./components";

const LessonEnvironment = () => (
  <View
    style={{
      width: 1000,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 80,
      paddingBottom: 40,
    }}
  >
    <Mantra />
    <HomeButton />
  </View>
);

export default LessonEnvironment;
