// import React from "react";
// import { AppRegistry, StyleSheet, Text, View } from "react-360";

// export default class Classroom360 extends React.Component {
//   render() {
//     return (
//       <View style={styles.panel}>
//         <View style={styles.greetingBox}>
//           <Text style={styles.maintitle}>Welcome to Classroom360</Text>
//         </View>
//         <View style={styles.greetingBox}>
//           <Text style={styles.subtitle}>
//             Let's begin the learning adventure!
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1000,
//     height: 600,
//     backgroundColor: "rgba(17, 0, 158, 0)",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//   },
//   greetingBox: {
//     padding: 20,
//   },
//   maintitle: {
//     fontSize: 50,
//   },
//   subtitle: {
//     fontSize: 30,
//   },
// });

// AppRegistry.registerComponent("Classroom360", () => Classroom360);

import React from "react";
import { AppRegistry, View } from "react-360";
import { AppContent } from "./components";
import { withAppContext } from "./providers";

const Classroom360 = withAppContext(() => (
  <View
    style={{
      // transform: [{ translate: [0, 0, -2] }],
    }}
  >
    <AppContent />
  </View>
));

AppRegistry.registerComponent("AppContent", () => AppContent);
AppRegistry.registerComponent("Classroom360", () => Classroom360);
