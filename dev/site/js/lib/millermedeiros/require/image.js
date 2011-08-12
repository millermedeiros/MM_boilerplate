/**
 * @license RequireJS Image Plugin <https://gist.github.com/821476>
 * @author Miller Medeiros
 * @version 0.0.4 (2010/02/14)
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
(function(){
    
    var CACHE_BUST_QUERY_PARAM = 'bust',
        CACHE_BUST_FLAG = '!bust';
    
    function cacheBust(url){
        url = url.replace(CACHE_BUST_FLAG, '');
        url += (url.indexOf('?') < 0)? '?' : '&';
        return url + CACHE_BUST_QUERY_PARAM +'='+ (new Date()).getTime();
    }
    
    //as of RequireJS 0.22 - define method for plugins needs to be a literal object
    //to be able to work together with the optimizer (see: https://github.com/jrburke/requirejs/issues#issue/70)
    define({
        load : function(name, req, onLoad, config){
            var img;
            if(config.isBuild){
                onLoad(null); //avoid errors on the optimizer since it can't inline image files.
            }else{
                img = new Image();
                img.onload = function(evt){
                    onLoad(img);
                    delete img.onload; //release memory - suggested by John Hann
                };
                img.src = name;
            }
        },
        normalize : function (name, normalize) {
            //used normalize to avoid caching references to a "cache busted" request.
            return (name.indexOf(CACHE_BUST_FLAG) < 0)? name : cacheBust(name); 
        }
    });
    
}());
