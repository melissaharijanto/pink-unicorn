import React from "react";
import { withState, withHandlers, compose } from "recompose";
import { Environment, asset, NativeModules } from "react-360";
const { AudioModule } = NativeModules;
import { lessons } from "../consts";

/**
 * Higher-order component that enhances a component with state and handlers related to lesson selection.
 *
 * @function withStateAndHandlers
 * @returns {HigherOrderComponent} The enhanced component.
 */
const withStateAndHandlers = compose(
  withState("selectedLesson", "lessonClicked", 4),
  withHandlers({
    /**
     * Handler function for when a lesson is clicked.
     *
     * @param {Object} props - The component props.
     * @param {number} props.selectedLesson - The currently selected lesson.
     * @param {Function} props.lessonClicked - The function to update the selected lesson.
     * @param {number} id - The ID of the clicked lesson.
     * @param {Object} evt - The event object.
     */
    lessonClicked: (props) => (id, evt) => {
      Environment.setBackgroundImage(asset(lessons[id - 1].image));
      if (lessons[id - 1].audio !== null && lessons[id - 1].audio !== undefined) {
        AudioModule.playEnvironmental({
          source: asset(lessons[id - 1].audio),
          volume: 0.3,
        });
      } else {
        AudioModule.stopEnvironmental();
      }
      props.lessonClicked(selectedLesson => id);
    },
  })
);

export default withStateAndHandlers;
