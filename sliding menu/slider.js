/* global $ */


(function (window, undefined) {

    "use strict";

    var hamburger = function (node, customSettings) {

        return new hamburger.fn.init(node, customSettings);
    };

    hamburger.fn = hamburger.prototype = {

        constructor: hamburger,

        init: function (config) {

            var self = this;

            self.setupHamburger(config);

            return self;
        },

        version: "0.0.1",

        setupHamburger: function (config) {

            var app = this,
                hb;

            app.config = $.extend({}, app.options, config);

            hb = document.querySelector(app.config.hamburger);

            app.config.body = $("body");

            if (hb) {

                hb.addEventListener("click", function () {

                    app.toggleMenu();

                });

            }

        },

        hideSideNav: function () {

            this.config.body.removeClass(this.config.toggleMenu);

        },

        toggleMenu: function () {

            var $body = this.config.body,
                toggleMenu = this.config.toggleMenu;

            if ($body.hasClass(toggleMenu)) {

                $body.removeClass(toggleMenu);

            } else {

                $body.addClass(toggleMenu);

            }

        },

        options: {
            toggleMenu: "menu-toggle",
            hamburger: ".hamburger-nav",
            body: undefined
        }

    };

    // Give the init function the hamburger prototype for later instantiation
    hamburger.fn.init.prototype = hamburger.fn;


    return (window.hamburger = hamburger);


}(window));