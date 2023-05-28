import React from "react";
import { View } from "react-360";
import { HomeEnvironment, LessonEnvironment } from "../../scenes";
import { withAppContext } from "../../providers";

const AppContent = withAppContext(() => (
   <View>
        <HomeEnvironment />
        <LessonEnvironment />
   </View>
));

export default AppContent;