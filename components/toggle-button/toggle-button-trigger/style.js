import { StyleSheet } from "react-360";
import colors from "../../../colors";

export default StyleSheet.create({
  view: {
    flexDirection: "column",
    height: 110,
    width: 110,
    padding: 20,
    marginTop: 60,
    marginLeft: 200,
    backgroundColor: `${colors.one}`,
    borderRadius: 55,
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
});
