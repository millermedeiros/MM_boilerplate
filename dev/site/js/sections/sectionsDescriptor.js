
// This module is used as a section descriptor, each new section module or
// route should be added to the SECTIONS array, all sections should have at
// least an "id" and a "route".
//
// Constructors
// ------------
// if module is a function it will be treated as a constructor.
// note that the constructor function will be called each time a new parameter
// matches the route and it will dispose previous object.
//
// Objects
// -------
// if module is an object it needs to implement the method `init()`.
// note that method `init()` will get called multiple times if matching same
// route passing different parameters.
//
// Options
// -------
// Available options:
//  - id:String => Used internally to get proper section.
//  - route:(String|RegExp) => See `crossroads.addRoute()` documentation.
//  - [params]:Array => Arguments passed to `section.init()` or `new
//  Section()` (if constructor) by default.
//  - [rules]:Object => Route.rules.
//  - [moduleId]:String => Path to module. It will load the module at given path
//    if provided. Only use it if you wan't to override the normal
//    id-to-module path resolution. (useful when you want multiple routes to
//    load same module just passing different parameters)
//  - [isAsync]:Boolean => If section init()/constructor should NOT wait
//  previous section end(), it will override `sectionController.DEFAULT_ASYNC`.

define(function () {

    var baseParams = ['#wrapper'];


    var SECTIONS = [
        {
            "id" : "home",
            "route" : "home",
            "moduleId" : "sections/AbstractSection2",
            "params" : ["Home"].concat(baseParams)
        },
        {
            "id" : "about",
            "route" : "about/:id:",
            "rules" : {
                "id" : /^[0-9]+$/
            },
            "params" : baseParams
        },
        {
            "id" : "foo",
            "route" : "foo",
            "moduleId" : "sections/AbstractSection2",
            "params" : ["Foo"].concat(baseParams)
        },
        {
            "id" : "lorem",
            "route" : "lorem",
            "params" : baseParams
        },
        {
            "id" : "lorem/ipsum",
            "route" : "lorem/ipsum/:id:",
            "params" : baseParams
        }
    ];

    return SECTIONS;
});
