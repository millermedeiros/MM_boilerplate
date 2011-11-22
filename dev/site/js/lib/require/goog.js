/** @license
 * RequireJS plugin for loading Google Ajax API modules thru `google.load`
 * Author: Miller Medeiros
 * Version: 0.1.1 (2011/11/21)
 * Released under the WTFPL
 */
define(['async'], function () {

    var rParts = /^(^\w+)(?:,([^,]+))?(?:,\[([^\]]+)\])?/;

    function parseName(name){
        var match = rParts.exec(name),
            data = {
                moduleName : match[1],
                version : match[2] || '1',
                packages : match[3]? match[3].split(',') : []
            };
        return data;
    }

    return {
        load : function(name, req, onLoad, config){
            if (config.isBuild) {
                onLoad(null); //avoid errors on the optimizer
            } else {
                var data = parseName(name);

                req(['async!'+ document.location.protocol +'//www.google.com/jsapi'], function(){
                    google.load(data.moduleName, data.version, {
                        packages : data.packages,
                        callback : onLoad
                    });
                });
            }
        }
    };

});
