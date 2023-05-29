import { ReactInstance, Surface } from "react-360-web";
/**
 * Initializes the React 360 application.
 *
 * @param {string} bundle - The bundle URL of the React 360 app.
 * @param {HTMLElement} parent - The parent element where the app will be rendered.
 * @param {Object} options - Custom options for the ReactInstance.
 */
function init(bundle, parent, options = {}) {
  /**
   * Represents a React 360 instance.
   *
   * @class
   * @name ReactInstance
   */
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    // Add custom options here
    ...options,
  });

  const myCylinderSurface = new Surface(
    4096, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  myCylinderSurface.setDensity(4680);

  /**
   * Renders the app content to the specified surface.
   *
   * @param {ReactElement} rootElement - The root element of the React app.
   * @param {Surface} surface - The surface to render the app content.
   */
  r360.renderToSurface(
    r360.createRoot("ToggleButton", {
      /* initial props */
    }),
    myCylinderSurface
    // r360.getDefaultSurface()
  );

  r360.renderToSurface(
    r360.createRoot("AppContent", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  /**
   * Renders the app content to the specified location.
   *
   * @param {ReactElement} rootElement - The root element of the React app.
   * @param {Location} location - The location to render the app content.
   */
  r360.renderToLocation(
    r360.createRoot("Classroom360", {
      /* initial props */
    }),
    r360.getDefaultLocation()
  );

  /**
   * Sets the background image of the compositor to the specified asset URL.
   *
   * @param {string} assetURL - The URL of the background image asset.
   */
  r360.compositor.setBackground(
    r360.getAssetURL("classroom/classroomcartoon.jpg")
  );
}

/**
 * The global object for the React 360 app.
 *
 * @namespace
 * @name React360
 */
window.React360 = { init };
