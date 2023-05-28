import React from "react";
import { View } from "react-360";
import { Title, Menu, Lessons } from "./components";

const HomeEnvironment = () => (
    <View>
        <Menu>
            <Title />
            <Lessons />
        </Menu>
    </View>
);

export default HomeEnvironment;