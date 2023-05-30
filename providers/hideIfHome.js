import hideIf from "./hideIf";

/**
 * Higher-order component that hides the wrapped component if the selected lesson is 4.
 *
 * @function hideIfHome
 * @returns {HigherOrderComponent} The enhanced component.
 */
const hideIfHome = hideIf((props) => props.selectedLesson === 4);

export default hideIfHome;