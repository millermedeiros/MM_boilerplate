#!/bin/bash

echo "\n == UPDATING LIBS =="


echo "\n -- updating signals.js --\n"
curl https://raw.github.com/millermedeiros/js-signals/master/dist/signals.js > dev/site/js/lib/signals.js


echo "\n -- updating CompoundSignal.js --\n"
curl https://raw.github.com/millermedeiros/CompoundSignal/master/src/CompoundSignal.js > dev/site/js/lib/CompoundSignal.js


echo "\n -- updating hasher.js --\n"
curl https://raw.github.com/millermedeiros/Hasher/master/dist/js/hasher.js > dev/site/js/lib/hasher.js


echo "\n -- updating crossroads.js --\n"
curl https://raw.github.com/millermedeiros/crossroads.js/master/dist/crossroads.js > dev/site/js/lib/crossroads.js


echo "\n -- updating jquery.js --\n"
curl http://code.jquery.com/jquery.js > dev/site/js/lib/jquery/jquery.js


echo "\n -- updating mustache.js --\n"

echo "define(function(){\n//wrap code---" > dev/site/js/lib/mustache.js
curl https://raw.github.com/janl/mustache.js/master/mustache.js >> dev/site/js/lib/mustache.js
echo "//end wrap---\nMustache.parse = Mustache.to_html;\nreturn Mustache;\n});" >> dev/site/js/lib/mustache.js



# RequireJS ----------

echo "\n -- updating require.js --\n"
curl https://raw.github.com/jrburke/requirejs/master/require.js > dev/site/js/lib/require/require.js


echo "\n -- updating require/text.js --\n"
curl https://raw.github.com/jrburke/requirejs/master/text.js > dev/site/js/lib/require/text.js


echo "\n -- updating require/async.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/async.js > dev/site/js/lib/require/async.js


echo "\n -- updating require/noext.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/noext.js > dev/site/js/lib/require/noext.js


echo "\n -- updating require/json.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/json.js > dev/site/js/lib/require/json.js


echo "\n -- updating require/image.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/image.js > dev/site/js/lib/require/image.js



# Other Libs -----------


echo "\n -- updating amd-utils --\n"
rm -rf dev/site/js/lib/amd-utils
git clone https://github.com/millermedeiros/amd-utils.git dev/site/js/lib/amd-utils
rm -rf dev/site/js/lib/amd-utils/.git/ dev/site/js/lib/amd-utils/tests/
rm dev/site/js/lib/amd-utils/src/README.mdown dev/site/js/lib/amd-utils/.gitignore
mv dev/site/js/lib/amd-utils/src/* dev/site/js/lib/amd-utils/
rmdir dev/site/js/lib/amd-utils/src/


echo "\n -- updating MM_js_lib --\n"
rm -rf dev/site/js/lib/millermedeiros
git clone https://github.com/millermedeiros/MM_js_lib.git dev/site/js/lib/millermedeiros
rm -rf dev/site/js/lib/millermedeiros/.git/ dev/site/js/lib/millermedeiros/lib/ dev/site/js/lib/millermedeiros/tests/ dev/site/js/lib/millermedeiros/src/_deprecated/
rm dev/site/js/lib/millermedeiros/.gitignore dev/site/js/lib/millermedeiros/.gitmodules dev/site/js/lib/millermedeiros/.jshintrc
mv dev/site/js/lib/millermedeiros/src/* dev/site/js/lib/millermedeiros/
rmdir dev/site/js/lib/millermedeiros/src/


echo "\n -- updating basis.css --\n"
rm -rf dev/site/css/basis
git clone https://github.com/millermedeiros/basis.css.git dev/site/css/basis
rm -rf dev/site/css/basis/.git/ dev/site/css/basis/.gitignore dev/site/css/basis/index.html dev/site/css/basis/demo.html
mv dev/site/css/basis/css/* dev/site/css/basis/
rmdir dev/site/css/basis/css/


echo "\n == FINISHED UPDATE == \n"
