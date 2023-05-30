import React from "react";
import LessonButton from "../lesson-button";
import { usingAppContext } from "../../../../providers";
import { lessons } from "../../../../consts";
import { compose } from "recompose";
import { View } from "react-360";

/**
 * Represents the lessons component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.lessonClicked - The function to handle lesson click.
 * @returns {JSX.Element} The JSX element representing the lessons component.
 */
const LessonsComponent = ({ lessonClicked }) => {
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
};

export default compose(usingAppContext)(LessonsComponent);
