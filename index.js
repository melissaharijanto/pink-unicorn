import React from "react";
import { AppRegistry, View } from "react-360";
import { AppContent } from "./components";
import ToggleButton from "./components/toggle-button";
import { withAppContext } from "./providers";

/**
 * Represents the Classroom360 application.
 * @component
 */
const Classroom360 = withAppContext(() => (
  <View>
    <AppContent />
  </View>
));

// Register components with AppRegistry
AppRegistry.registerComponent("AppContent", () => AppContent);
AppRegistry.registerComponent("ToggleButton", () => ToggleButton);
AppRegistry.registerComponent("Classroom360", () => Classroom360);
