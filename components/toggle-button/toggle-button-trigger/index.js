import React from "react";
import { View, Text, Image } from "react-360";
import style from "./style";
import { Environment, asset, NativeModules, VrButton } from "react-360";
import ButtonContent from "../toggle-button-content";

class ButtonTrigger extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }
  render() {
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });

    return (
      <View style={{alignContent: "center", justifyContent: "center"}}>
        <VrButton onClick={toggle}>
          <View style={style.view}>
            <Image
              style={{ width: 70, height: 70 }}
              source={asset("icons/search.svg")}
            />
          </View>
        </VrButton>
        {this.state.isOpen ? <ButtonContent /> : null}
      </View>
    );
  }
}

export default ButtonTrigger;
