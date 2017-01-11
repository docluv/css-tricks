//document.designMode = 'on';


/* global $ */


/*

page = {
    "title": "this is the page title, placed in the TITLE element",
    "keywords": "this is the page keywords, placed in the Keywords META element",
    "description": "this is the page description, placed in the description META element",
    "featuredImg": "the featured image applied to the open graph and twitter card",
    "manifest": "manifest.json",
    "body": "page HTML"
};

*/

(function (window, undefined) {

    "use strict";

    var contentEditor = function (node, customSettings) {

        return new contentEditor.fn.init(node, customSettings);
    };

    contentEditor.fn = contentEditor.prototype = {

        constructor: contentEditor,

        init: function (config) {

            var self = this;

            self.setupcontentEditor(config);

            return self;
        },

        version: "0.0.1",

        /*
            Find Edit, Save & Cancel Buttons
        */
        setupcontentEditor: function (config) {

            var self = this;

            self.config = $.extend({}, self.options, config);

            self.editor = document.querySelector(self.config.contentEditor);

            self.editBtn = document.querySelector(self.config.editBtn);
            self.cancelBtn = document.querySelector(self.config.cancelBtn);
            self.saveBtn = document.querySelector(self.config.saveBtn);

            self.bindButtons();

        },

        bindButtons: function () {

            var self = this;

            self.editBtn.addEventListener("click", function (e) {

                self.beginEdit();

            });

            self.cancelBtn.addEventListener("click", function (e) {

                self.cancelEdit();

            });

            self.saveBtn.addEventListener("click", function (e) {

                self.saveUpdate();

            });
        },

        beginEdit: function () {

            var self = this;

            self.editBtn.classList.add("hidden");
            self.cancelBtn.classList.remove("hidden");
            self.saveBtn.classList.remove("hidden");

            self.makeEditable(self.editor);

        },

        saveUpdate: function () {

            var self = this;

            self.editBtn.classList.remove("hidden");
            self.cancelBtn.classList.add("hidden");
            self.saveBtn.classList.add("hidden");

            self.activePage.body = self.editor.innerHTML;

            self.uploadPage(self.activePage);

        },

        cancelEdit: function () {

            var self = this;

            self.editBtn.classList.remove("hidden");
            self.cancelBtn.classList.add("hidden");
            self.saveBtn.classList.add("hidden");

            self.removeEditable(self.editor);

        },

        makeEditable: function (ele) {

            ele.setAttribute("contenteditable", "true");
            ele.contentEditable = 'true';

        },

        removeEditable: function (ele) {

            ele.removeAttribute("contenteditable");
            ele.contentEditable = 'false';

        },

        //json object, see above for example model
        activePage: undefined,
        editor: undefined,

        editBtn: undefined,
        cancelBtn: undefined,
        saveBtn: undefined,

        getPage: function (target) {

            //target is the source URL for the JSON file


        },

        uploadPage: function (page) {


            if (page && typeof page === "string" && page !== "") {

                //eventually remove raw AJAX code for a service/interface

                var self = this,
                    xhr = new XMLHttpRequest();

                // start upload
                xhr.open("POST", self.config.api, true);

                xhr.setRequestHeader("Content-Type", "text/html");


                xhr.send(page);

                //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                //xhr.send(JSON.stringify({name:"John Rambo", time:"2pm"}))

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        // request finished and response is ready
                        if (xhr.status === 200) {
                            // all is well!

                            console.log("update uploaded");

                        }
                    }
                };

            }

        },

        options: {
            api: "https://w81236jopc.execute-api.us-east-1.amazonaws.com/test/page-editor",
            editBtn: ".btn-edit",
            cancelBtn: ".btn-cancel",
            saveBtn: ".btn-save",
            contentEditor: ".content-editor",
            sourceURL: "http://localhost:46578/contenteditable/source-page.html",
            body: undefined
        }

    };

    // Give the init function the contentEditor prototype for later instantiation
    contentEditor.fn.init.prototype = contentEditor.fn;

    return (window.contentEditor = contentEditor);

}(window));