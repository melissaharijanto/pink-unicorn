import { StyleSheet } from "react-360";
import colors from "../../../../colors";

export default StyleSheet.create({
  view: {
    flexDirection: "column",
    height: 100,
    padding: 20,
  },
  text: {
    backgroundColor: `${colors.one}`,
    color: `${colors.three}`,
    borderColor: "white",
    borderRadius: 20,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
});
