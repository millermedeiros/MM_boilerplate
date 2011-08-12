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
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c;}}((function(){try
{console.log();return window.console;}catch(err){return (window.console={});}}())));

//>>includeEnd("debug"); 



//closure, avoid polluting global scope
(function(){

    var IS_LOCAL = (document.location.href.search(/(:\/\/localhost|file:\/\/)/) !== -1);

    //CONFIG
    //---------
    //configure RequireJS
    //IMPORTANT: remember to also update paths config inside "_build/js_build.js"

    require({ 
        paths : { 
            // folders (for brevity)
            'jq' : 'lib/jquery',
            'mm' : 'lib/millermedeiros',
            // libs
            'jquery' : (IS_LOCAL? 'lib/jquery/jquery' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min'), //load from CDN if not local
            'mustache' : 'lib/mustache',
            'signals' : 'lib/signals',
            'crossroads' : 'lib/crossroads',
            'hasher' : 'lib/hasher',
            // requirejs plugins
            'text' : 'lib/require/text',
            'async' : 'lib/millermedeiros/require/async',
            'ext' : 'lib/millermedeiros/require/ext',
            'img' : 'lib/millermedeiros/require/image'
        },
//>>includeStart("cacheBust", pragmas.cacheBust);
        urlArgs: 'bust=' + (new Date()).getTime(), //cache bust during development, will be deleted during build!
//>>includeEnd("cacheBust"); 
        waitSeconds: (IS_LOCAL? 2 : 15), //fail early if local
        priority : [
            'jquery'
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
            'jquery'
        ], 
        function ($){ 

            function init(){
                //start you application inside this function
                console.log('Initialized application.');
            }

            $(document).ready(init);

        }
    );


}());
