/**
 * For more options check: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */

({
    appDir : '../js',
    baseUrl: '../js',
    dir: '../../../deploy/site/js',
    optimize : 'closure',
    //optimize : 'uglify',
    //optimize : "none",
    inlineText: true,
    pragmas : {
        debug : false,
        cacheBust : false
    },
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
        // requirejs plugins
        'text' : 'lib/require/text',
        'async' : 'lib/require/async',
        'json' : 'lib/require/json',
        'noext' : 'lib/require/noext',
        'img' : 'lib/require/image'
    },
    modules : [
        {
            name : 'main',
            include : [],
            exclude : []
        }
    ]
})
