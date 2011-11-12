// file used only for debugging purposes

define(['mm/other/sectionController'], function (sectionController) {

    function init() {

        //for debugging purposes and to show `sectionController` API
        sectionController.initializedChange.add(function(){
            console.log('[initializedChange]', arguments);
        });
        sectionController.endedPrevSection.add(function(){
            console.log('[endedPrevSection]', arguments);
        });
        sectionController.initializedDestSection.add(function(){
            //if it initialized the DestSection it also means it endedChange...
            //that's why we don't need an `endedChange` Signal
            console.log('[initializedDestSection]', arguments);
        });


        //you can also listen to router events. It's the recommended
        //approach for tracking since it relates directly to the parsed
        //Hash, sections Ids and parameters may not relate with the
        //real URL
        sectionController.router.routed.add(function(){
            console.log('[router.routed]', arguments);
        });
        sectionController.router.bypassed.add(function(){
            console.log('[router.bypassed]', arguments);
        });

    }

    return {
        init : init
    };
});
