/*
 * Bergson setInterval Clock
 * http://github.com/colinbdclark/bergson
 *
 * Copyright 2015, Colin Clark
 * Dual licensed under the MIT and GPL Version 2 licenses.
 */
/*global fluid, berg*/
(function () {
    "use strict";

    fluid.defaults("berg.clock.setInterval", {
        gradeNames: ["berg.clock.realtime", "autoInit"],

        freq: 10,

        members: {
            intervalID: null
        },

        invokers: {
            start: {
                funcName: "berg.clock.setInterval.start",
                args: ["{that}"]
            },

            stop: {
                funcName: "berg.clock.setInterval.stop",
                args: ["{that}"]
            }
        }
    });

    berg.clock.setInterval.start = function (that) {
        that.intervalID = setInterval(that.tick, 1000 / that.freq);
    };

    berg.clock.setInterval.stop = function (that) {
        clearInterval(that.intervalID);
    };
}());
