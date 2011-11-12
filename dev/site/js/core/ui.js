define(['./ui/mainNav'], function (mainNav) {

    //this module would be responsible for starting the application UI

    function init() {
        mainNav.build('#wrapper');
        $('#wrapper').addClass('pa20');
    }

    return {
        init : init
    };
});
