define(['./ui/mainNav'], function (mainNav) {

    //this module would be responsible for starting the application UI

    function init(container) {
        mainNav.build(container);
        $(container).addClass('pa20');
    }

    return {
        init : init
    };
});
