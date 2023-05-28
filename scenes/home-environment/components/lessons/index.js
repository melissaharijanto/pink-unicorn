import React from "react";
import LessonButton from "../lesson-button";
import { usingAppContext } from "../../../../providers";
import { lessons } from "../../../../consts";
import { compose } from "recompose";
import { View } from "react-360";

export default compose(usingAppContext)(({ lessonClicked }) => {
  return (
    <View>
      {lessons.map((lesson) => (
        <LessonButton
          selectedLesson={lesson.id}
          key={lesson.id}
          buttonClick={() => {
            lessonClicked(lesson.id);
          }}
          text={lesson.text}
        />
      ))}
    </View>
  );
});
