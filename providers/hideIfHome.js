import React from "react";
import hideIf from "./hideIf";

const hideIfHome = hideIf((props) => props.selectedLesson === 4);

export default hideIfHome;