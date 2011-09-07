/**
 * @license
 * This site uses many modules from Miller Medeiros JS Library <https://github.com/millermedeiros/MM_js_lib/> which is Released under the MIT license.
 *
 * =====
 * Any code that isn't explicitly credited as open-source shouldn't be used without previous authorization.
 * =====
 */




//>>includeStart("debug", pragmas.debug);

// make it safe to use console.log always (borrowed from HTML5 Boilerplate and linted)
// it will be deleted during build!
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c;}}((function(){try
{console.log();return window.console;}catch(err){return (window.console={});}}())));

//>>includeEnd("debug");



//closure, avoid polluting global scope
(function(){

    var IS_LOCAL = /(:\/\/localhost|file:\/\/)/.test(document.location.href);

    // CONFIG
    // ---------
    // configure RequireJS
    // IMPORTANT: remember to also update paths config inside "_build/js_build.js"

    require.config({
        packages: [
            {
                'name' : 'dojo',
                'location' : 'lib/dojo',
                'main' : 'lib/main-browser',
                'lib' : '.'
            },
            {
                'name' : 'dijit',
                'location' : 'lib/dijit',
                'main' : 'lib/main',
                'lib' : '.'
            }
        ],
        paths : {
            // folders (for brevity)
            'mm' : 'lib/millermedeiros',
            // libs
            'mustache' : 'lib/mustache',
            'signals' : 'lib/signals',
            'crossroads' : 'lib/crossroads',
            'hasher' : 'lib/hasher',
            // requirejs plugins
            'text' : 'lib/require/text',
            'i18n' : 'lib/require/i18n',
            'async' : 'lib/millermedeiros/require/async',
            'ext' : 'lib/millermedeiros/require/ext',
            'img' : 'lib/millermedeiros/require/image'
        },
//>>includeStart("cacheBust", pragmas.cacheBust);
        urlArgs: 'bust=' + (new Date()).getTime(), //cache bust during development, will be deleted during build!
//>>includeEnd("cacheBust");
        waitSeconds: (IS_LOCAL? 5 : 45), //fail early if local
        priority : []
    });




    // INIT
    // ---------
    // main.js is used only for settings and initializing application, all heavy
    // logic is stored inside proper modules, it makes it easy to require core
    // modules from inside the application and also keeps main.js small since
    // settings adds too much noise to the real code.

    define(
        [
            'dojo',
            'dijit/dijit',
            'dijit/Calendar'
        ],
        function (dojo, dijit, Calendar){

            function init(){
                //just to show how to use a dijit and test that it is working
                //properly
                var calendar = new dijit.Calendar({}, dojo.byId("wrapper"));
                dojo.body().className += ' tundra';

                //initialize application
                console.log('Initialized application.');
            }

            dojo.ready(init);

        }
    );


}());
