define(['text!./mainNav.html'], function (template) {

    function build(parent) {
        $(template).prependTo(parent);
    }

    return {
        build : build
    };
});

