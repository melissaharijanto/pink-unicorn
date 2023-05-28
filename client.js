/**
 * Initializes the React 360 application.
 *
 * @param {string} bundle - The bundle URL of the React 360 app.
 * @param {HTMLElement} parent - The parent element where the app will be rendered.
 * @param {Object} options - Custom options for the ReactInstance.
 */
const init = (bundle, parent, options = {}) => {
  /**
   * Represents a React 360 instance.
   *
   * @class
   * @name ReactInstance
   */
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  /**
   * Renders the app content to the default cylinder surface.
   *
   * @param {ReactElement} rootElement - The root element of the React app.
   * @param {Surface} surface - The default surface to render the app content.
   */
  r360.renderToSurface(
    r360.createRoot('Classroom360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  /**
   * Sets the background image of the compositor to the specified asset URL.
   *
   * @param {string} assetURL - The URL of the background image asset.
   */
  r360.compositor.setBackground(r360.getAssetURL("/classroom/classroomcartoon.jpg"));
};

/**
 * The global object for the React 360 app.
 *
 * @namespace
 * @name React360
 */
window.React360 = { init };
