import React from "react";
import { VrButton, View } from "react-360";
import { BaseButton } from "../../../../components";
import { usingAppContext } from "../../../../providers";
import { lessons } from "../../../../consts";
import style from "./style";

export default usingAppContext(({ selectedLesson, lessonClicked }) => {
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
});
