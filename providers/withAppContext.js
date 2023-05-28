import { withContext, compose } from "recompose";
import * as PropTypes from "prop-types";
import withStateAndHandlers from "./withStateAndHandlers";

export const AppPropTypes = {
    selectedLesson: PropTypes.number,
    lessonClicked: PropTypes.func,
}

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