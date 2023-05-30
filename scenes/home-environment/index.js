import React from "react";
import { View } from "react-360";
import { Title, Menu, Lessons } from "./components";

/**
 * Represents the home environment.
 *
 * @function HomeEnvironment
 * @returns {JSX.Element} The JSX element representing the home environment.
 */
const HomeEnvironment = () => (
  <View>
    <Menu>
      <Title />
      <Lessons />
    </Menu>
  </View>
);

export default HomeEnvironment;
