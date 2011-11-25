#!/bin/bash


# This bash script updates external libraries..
#
# ====== IMPORTANT ======
#
# it may break application if 3rd party libs aren't backwards compatible
# or if libs were edited locally, use with care !!!




# Settings ----------


SWAP_FOLDER="_update_swap"

# if $IS_SVN is `true` it will avoid deleting ".svn" folders
# set to `false` if using Git/Mercurial.
IS_SVN=false



# Update ----------


echo "\n == UPDATING LIBS =="


echo "\n -- updating signals.js --\n"
curl https://raw.github.com/millermedeiros/js-signals/master/dist/signals.js > js/lib/signals.js


echo "\n -- updating CompoundSignal.js --\n"
curl https://raw.github.com/millermedeiros/CompoundSignal/master/src/CompoundSignal.js > js/lib/CompoundSignal.js


echo "\n -- updating hasher.js --\n"
curl https://raw.github.com/millermedeiros/Hasher/master/dist/js/hasher.js > js/lib/hasher.js


echo "\n -- updating crossroads.js --\n"
curl https://raw.github.com/millermedeiros/crossroads.js/master/dist/crossroads.js > js/lib/crossroads.js


echo "\n -- updating jquery.js --\n"
curl http://code.jquery.com/jquery.js > js/lib/jquery/jquery.js


echo "\n -- updating mustache.js --\n"

echo "define(function(){\n//wrap code---" > js/lib/mustache.js
curl https://raw.github.com/janl/mustache.js/master/mustache.js >> js/lib/mustache.js
echo "//end wrap---\nMustache.parse = Mustache.to_html;\nreturn Mustache;\n});" >> js/lib/mustache.js



# RequireJS ----------


echo "\n -- updating require.js --\n"
curl https://raw.github.com/jrburke/requirejs/master/require.js > js/lib/require/require.js


echo "\n -- updating require/text.js --\n"
curl https://raw.github.com/jrburke/requirejs/master/text.js > js/lib/require/text.js


echo "\n -- updating require/i18n.js --\n"
curl https://raw.github.com/jrburke/requirejs/master/i18n.js > js/lib/require/i18n.js


echo "\n -- updating require/async.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/async.js > js/lib/require/async.js


echo "\n -- updating require/noext.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/noext.js > js/lib/require/noext.js


echo "\n -- updating require/json.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/json.js > js/lib/require/json.js


echo "\n -- updating require/image.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/image.js > js/lib/require/image.js


echo "\n -- updating require/goog.js --\n"
curl https://raw.github.com/millermedeiros/requirejs-plugins/master/src/goog.js > js/lib/require/goog.js



# r.js -----------


echo "\n -- updating r.js --\n"

curl https://raw.github.com/jrburke/r.js/master/dist/r-edge.js > _build/rjs/r.js



# Other Libs -----------



echo "\n -- updating amd-utils --\n"

if $IS_SVN; then
    find ./js/lib/amd-utils ! -wholename '*.svn*' -type f -delete
else
    rm -rf js/lib/amd-utils
fi
git clone https://github.com/millermedeiros/amd-utils.git $SWAP_FOLDER/amd-utils
rm -rf $SWAP_FOLDER/amd-utils/.git/ $SWAP_FOLDER/amd-utils/tests/
rm -rf $SWAP_FOLDER/amd-utils/_build/ $SWAP_FOLDER/amd-utils/doc/
rm $SWAP_FOLDER/amd-utils/.gitignore $SWAP_FOLDER/amd-utils/build.js
mv $SWAP_FOLDER/amd-utils/src/* $SWAP_FOLDER/amd-utils/
rmdir $SWAP_FOLDER/amd-utils/src/
cp -R $SWAP_FOLDER/amd-utils/. js/lib/amd-utils/
mv $SWAP_FOLDER/amd-utils/README.mdown js/lib/millermedeiros/
rm -rf $SWAP_FOLDER/amd-utils/



echo "\n -- updating MM_js_lib --\n"

if $IS_SVN; then
    find ./js/lib/millermedeiros ! -wholename '*.svn*' -type f -delete
else
    rm -rf js/lib/millermedeiros
fi
git clone https://github.com/millermedeiros/MM_js_lib.git $SWAP_FOLDER/millermedeiros
rm -rf $SWAP_FOLDER/millermedeiros/.git/ $SWAP_FOLDER/millermedeiros/lib/ $SWAP_FOLDER/millermedeiros/tests/ $SWAP_FOLDER/millermedeiros/src/_deprecated/
rm $SWAP_FOLDER/millermedeiros/.gitignore $SWAP_FOLDER/millermedeiros/.gitmodules $SWAP_FOLDER/millermedeiros/.jshintrc
cp -R $SWAP_FOLDER/millermedeiros/src/. js/lib/millermedeiros/
mv $SWAP_FOLDER/millermedeiros/README.markdown js/lib/millermedeiros/
rm -rf $SWAP_FOLDER/millermedeiros/



echo "\n -- updating basis.css --\n"

if $IS_SVN; then
    find css/basis ! -wholename '*.svn*' -type f -delete
else
    rm -rf css/basis
fi
git clone https://github.com/millermedeiros/basis.css.git $SWAP_FOLDER/basis
rm -rf $SWAP_FOLDER/basis/.git/ $SWAP_FOLDER/basis/.gitignore $SWAP_FOLDER/basis/index.html $SWAP_FOLDER/basis/demo.html
cp -R $SWAP_FOLDER/basis/css/. css/basis/
mv $SWAP_FOLDER/basis/README.md css/basis/
rm -rf $SWAP_FOLDER/basis/



# Finish -----------


echo "\n -- clean swap folder --\n"
rm -rf $SWAP_FOLDER


echo "\n == FINISHED UPDATE == \n"
