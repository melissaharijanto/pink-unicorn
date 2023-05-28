import React from "react";
import { withState, withHandlers, compose } from "recompose";
import { Environment, asset, NativeModules } from "react-360";
const { AudioModule } = NativeModules;
import { lessons } from "../consts";

const withStateAndHandlers = compose(
    withState("selectedLesson", "lessonClicked", 4),
    withHandlers({
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
        }
    }),
)

export default withStateAndHandlers;