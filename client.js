// // This file contains the boilerplate to execute your React app.
// // If you want to modify your application's content, start in "index.js"

// import { ReactInstance } from "react-360-web";

// const init = (bundle, parent, options = {}) => {
//   const r360 = new ReactInstance(bundle, parent, {
//     // Add custom options here
//     fullScreen: true,
//     ...options,
//   });

//   // Render your app content to the default cylinder surface
//   r360.renderToSurface(
//     r360.createRoot('Classroom360', { /* initial props */ }),
//     r360.getDefaultSurface()
//   );

//   // Load the initial environment
//   r360.compositor.setBackground(r360.getAssetURL("/classroom/classroomcartoon.jpg"));
// }

// window.React360 = { init };

// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    // Add custom options here
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot("AppContent", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  r360.renderToLocation(
    r360.createRoot("Classroom360", {
      /* initial props */
    }),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(
    r360.getAssetURL("classroom/classroomcartoon.jpg")
  );
}

window.React360 = { init };
