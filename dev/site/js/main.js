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
        paths : {
            // folders (for brevity)
            'jq' : 'lib/jquery',
            'mm' : 'lib/millermedeiros',
            'amd-utils' : 'lib/amd-utils',
            // libs
            'jquery' : 'lib/jquery/jquery', //not loading jquery from CDN because of: http://groups.google.com/group/requirejs/t/c0e4806b6e5deb16
            'mustache' : 'lib/mustache',
            'signals' : 'lib/signals',
            'crossroads' : 'lib/crossroads',
            'hasher' : 'lib/hasher',
            'CompoundSignal' : 'lib/CompoundSignal',
            // requirejs plugins
            'text' : 'lib/require/text',
            'async' : 'lib/require/async',
            'goog' : 'lib/require/goog',
            'json' : 'lib/require/json',
            'noext' : 'lib/require/noext',
            'img' : 'lib/require/image'
        },
//>>includeStart("cacheBust", pragmas.cacheBust);
        urlArgs: 'bust='+ (new Date()).getTime(), //cache bust during development, will be deleted during build!
//>>includeEnd("cacheBust");
        waitSeconds: (IS_LOCAL? 2 : 45), //fail early if local
        priority : [
            // 'jquery' //load/execute jquery before other dependencies
        ]
    });




    // INIT
    // ---------
    // main.js is used only for settings and initializing application, all heavy
    // logic is stored inside proper modules, it makes it easy to require core
    // modules from inside the application and also keeps main.js small since
    // settings adds too much noise to the real code.

    define(
        [
            'jquery',
            'core/sectionController',
            'core/sectionLogger',
            'core/ui',
            'sections/sectionsDescriptor'
        ],
        function ($, sectionController, sectionLogger, ui, sectionsDescriptor){

            function init() {
                console.log('[main.init]');

                ui.init('#wrapper');

                //if you don't want to log all the events from the section
                //controller comment this line
                sectionLogger.init(sectionController);

                sectionController.DEFAULT_ROUTE = 'home';

                //if true start next section without waiting the previous one to end
                //section.isAsync will override this setting
                sectionController.DEFAULT_ASYNC = false;

                sectionController.init(sectionsDescriptor);
            }


            $(document).ready(init);

        }
    );


}());
