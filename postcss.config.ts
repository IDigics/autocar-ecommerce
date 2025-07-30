/**
 * POSTCSS CONFIGURATION
 * =====================
 *
 * PostCSS is a tool for transforming CSS with JavaScript plugins.
 * This configuration sets up the essential plugins for the AutoCar'z application.
 *
 * PLUGINS INCLUDED:
 * 1. Tailwind CSS - Utility-first CSS framework processing
 * 2. Autoprefixer - Automatic vendor prefix addition for browser compatibility
 *
 * PROCESSING ORDER:
 * 1. Tailwind CSS processes utility classes and generates CSS
 * 2. Autoprefixer adds browser vendor prefixes for wider compatibility
 *
 * BROWSER SUPPORT:
 * - Autoprefixer ensures compatibility with older browsers
 * - Adds -webkit-, -moz-, -ms- prefixes automatically
 * - Based on browserslist configuration (can be added to package.json)
 *
 * MODIFICATION GUIDELINES:
 * - Add new PostCSS plugins to the plugins array
 * - Order matters: generally process Tailwind first, then other transforms
 * - Common additional plugins: cssnano (minification), postcss-import (file imports)
 */

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// ===== POSTCSS PLUGIN CONFIGURATION =====
/**
 * Plugin Configuration Object
 *
 * Defines the PostCSS plugins that will process CSS files in order.
 * Each plugin transforms the CSS and passes it to the next plugin.
 */
const config = {
  plugins: [
    // ===== TAILWIND CSS PLUGIN =====
    // Processes Tailwind utility classes and generates corresponding CSS
    // Must be first to process @tailwind directives and utility classes
    tailwindcss,

    // ===== AUTOPREFIXER PLUGIN =====
    // Adds vendor prefixes for better browser compatibility
    // Processes properties like 'transform' to include '-webkit-transform'
    autoprefixer,

    // ===== ADDITIONAL PLUGINS CAN BE ADDED HERE =====
    // Examples:
    // cssnano,                    // CSS minification for production
    // postcssImport,              // Enable @import statements
    // postcssNested,              // Enable nested CSS syntax
    // postcssCustomProperties,    // CSS custom properties support
  ],

  // ===== ADDITIONAL CONFIGURATION OPTIONS =====
  // parser: 'postcss-scss',      // Use SCSS parser if needed
  // map: process.env.NODE_ENV !== 'production', // Generate source maps in development
};

export default config;

// ===== COMMON POSTCSS PLUGINS FOR FUTURE USE =====
/**
 * Popular PostCSS plugins that might be useful:
 *
 * 1. CSS OPTIMIZATION:
 * - cssnano: Minifies CSS for production builds
 * - postcss-combine-duplicated-selectors: Removes duplicate CSS rules
 *
 * 2. CSS FEATURES:
 * - postcss-import: Enables @import statements
 * - postcss-nested: Allows nested CSS syntax (Sass-like)
 * - postcss-custom-properties: CSS custom properties (variables) support
 *
 * 3. BROWSER COMPATIBILITY:
 * - postcss-preset-env: Use future CSS features with fallbacks
 * - postcss-normalize: Cross-browser CSS normalization
 *
 * 4. DEVELOPMENT TOOLS:
 * - stylelint: CSS linting and error checking
 * - postcss-reporter: Better error reporting
 *
 * Installation example:
 * ```bash
 * npm install cssnano postcss-import postcss-nested
 * ```
 *
 * Usage example:
 * ```typescript
 * import cssnano from 'cssnano'
 * import postcssImport from 'postcss-import'
 *
 * const config = {
 *   plugins: [
 *     postcssImport,
 *     tailwindcss,
 *     autoprefixer,
 *     ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
 *   ]
 * }
 * ```
 */
