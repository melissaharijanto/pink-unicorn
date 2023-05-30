import { StyleSheet } from "react-360";
import colors from "../../../colors";

export default StyleSheet.create({
  view: {
    flexDirection: "column",
    padding: 20,
    marginTop: 60,
    marginLeft: 200,
    borderRadius: 55,
    backgroundColor: '#00000075',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  text: {
    backgroundColor: `${colors.one}`,
    color: `${colors.three}`,
    borderColor: "white",
    borderRadius: 35,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  paragraph: {
    marginTop: 20,
    borderRadius: 15,
    fontSize: 20,
    paddingLeft: 50,
    paddingRight: 50,
    color: `${colors.white}`,
    fontWeight: "600"
  }
});
