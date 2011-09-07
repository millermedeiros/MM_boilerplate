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
        cacheBust : false,
        asynchLoader: true, //for dojo build
        amdLoader : true //for dojo build
    },
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
    modules : [
        {
            name : 'main',
            include : [],
            exclude : []
        }
    ]
})
