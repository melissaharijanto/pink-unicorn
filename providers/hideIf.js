import { branch, renderNothing } from "recompose";

/**
 * Higher-order component that conditionally hides the wrapped component based on the provided callback.
 *
 * @function hideIf
 * @param {Function} callback - The callback function to determine if the component should be hidden.
 * @returns {HigherOrderComponent} The enhanced component.
 */
const hideIf = (callback) =>
    branch(
        callback,
        renderNothing,
    );

export default hideIf;