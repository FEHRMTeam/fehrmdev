/**
 * The default export of `decap-cms-app` is an object with all of the Decap CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from "decap-cms-app"

/**
 * Create uuid widget in separate file, import it here:
 */
import { Widget as IdWidget } from "./uuid-widget.js"

/**
 * Register the imported widget:
 */
CMS.registerWidget(IdWidget);