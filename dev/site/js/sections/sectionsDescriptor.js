
// This module is used as a section descriptor, each new section module or
// route should be added to the SECTIONS array, all sections should have at
// least an "id", sectionController will use the "id" as "route" if route isn't
// provided.
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
//  - id:String => Used internally to get proper section or as a route (if
//  route is the same as ID)
//  - [params]:Array => Arguments passed to `section.init()` or `new
//  Section()` by default.
//
//  Route related:
//  - [route]:(String|RegExp) => See `crossroads.addRoute()` documentation.
//  - [rules]:Object => Route.rules.
//  - [priority]:Number => Route priority (see `crossroads.addRoute`).
//  - [greedy]:Boolean => crossroads Route.greedy.
//
//  Behavior:
//  - [moduleId]:String => Path to module. It will load the module at given path
//    if provided. Only use it if you want to override the normal
//    id-to-module path resolution. (useful when you want multiple routes to
//    load same module just passing different parameters)
//  - [isAsync]:Boolean => If section init()/constructor should NOT wait
//  previous section end(), it will override `sectionController.DEFAULT_ASYNC`.

define(function () {

    // a default parameter could be added by overloading the
    // `sectionController.router.normalizeFn`, this is just a naive example.
    var baseParams = ['#wrapper'];


    var SECTIONS = [
        {
            "id" : "home",
            "moduleId" : "sections/SimpleSection",
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
            "moduleId" : "sections/SimpleSection",
            "params" : ["Foo"].concat(baseParams)
        },
        {
            "id" : "lorem",
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
