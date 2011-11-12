
// This module is used as a section descriptor, each new section module or
// route should be added to the SECTIONS array, all sections should have at
// least an "id" and a "route".
//
// Available options:
//  - id:String => Used internally to get proper section.
//  - route:(String|RegExp) => See `crossroads.addRoute()` documentation.
//  - [params]:Array => Arguments passed to section.init() method by default.
//  - [rules]:Object => Route.rules.
//  - [moduleId]:String => Path to module. It will load the module at given path
//    if provided. Only use it if you wan't to override the normal
//    route-to-module path resolution. (useful when you want multiple routes to
//    load same module just passing different parameters)
//  - [isAsync]:Boolean => If section init() should NOT wait previous section
//    end(), it will override `sectionController.DEFAULT_ASYNC`.

define(function () {

    var SECTIONS = [
        {
            "id" : "home",
            "route" : "home",
            "params" : [
                "lorem", "ipsum"
            ]
        },
        {
            "id" : "about",
            "route" : "about/:id:",
            "rules" : {
                "id" : /^[0-9]+$/
            }
        },
        {
            "id" : "lorem",
            "route" : "lorem"
        },
        {
            "id" : "lorem/ipsum",
            "route" : "lorem/ipsum/:id:"
        }
    ];

    return SECTIONS;
});
