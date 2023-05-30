import { getContext } from "recompose";
import { AppPropTypes } from "./withAppContext";

/**
 * Higher-order component that provides the AppContext props to the component.
 *
 * @function withAppContext
 * @returns {HigherOrderComponent} The enhanced component.
 */
export default getContext(AppPropTypes);