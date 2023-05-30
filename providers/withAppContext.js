import { withContext, compose } from "recompose";
import * as PropTypes from "prop-types";
import withStateAndHandlers from "./withStateAndHandlers";

/**
 * Prop types for the AppContext component.
 *
 * @typedef {Object} AppPropTypes
 * @property {number} selectedLesson - The selected lesson.
 * @property {Function} lessonClicked - The function to handle lesson click.
 */
export const AppPropTypes = {
    selectedLesson: PropTypes.number,
    lessonClicked: PropTypes.func,
}

/**
 * The AppContext component.
 *
 * @type {HigherOrderComponent}
 */
const AppContext = withContext(
    AppPropTypes,
    ({ selectedLesson, lessonClicked }) => ({
        selectedLesson,
        lessonClicked,
    })
);

export default compose(
    withStateAndHandlers,
    AppContext,
);