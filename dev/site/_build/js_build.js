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
        // libs
        'jquery' : 'lib/jquery/jquery',
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
    modules : [
        {
            name : 'main',
            include : [],
            exclude : ['jquery']
        }
    ]
})
