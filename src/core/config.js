/**
 * Module description: src/core/config.js
 *
 * This module holds the default configuration values and parameters for
 * graph objects.
 *
 * Created on 01/10/2018
 * @author Alexander. E. Fedotov
 * @email <alexander.fedotov.uk@gmail.com>
 */

module.exports = {
    /* this value is the default data-line width for a graph.
     * It may change depending on if there are more data points than
     * the default value of ticks on the x-axis. */
    lineWidth: 2,

    /* this value is the default axis, scale & grid line width for a graph, This value
     *  may be overridden by providing the value within a Graph(...) object constructor.
    * */
    gridLineWidth: 1,

    /* this is the maximum amount of ticks which are available on the x-axis */
    xTicks: 11,

    /* this is the maximum amount of ticks which are available on the y-axis */
    yTicks: 11,

    /* This value is used to determine the curvature of cubic interpolation, higher
     * values result in more curved connections and lower values are closer to linear
     * interpolation
     * */
    tension: 0.4,

    /* font size of X-Axis & Y-Axis labels */
    axisLabelFontSize: 14,

    /* font size of X-Axis & Y-Axis scale labels */
    scaleLabelFontSize: 12,

    /* Default value for the axis colour */
    axisColour: "rgb(94,94,94)",

    /* Debug flag for drawer calls, this will log all instructions the draw module gets */
    debug_draw: false,
};