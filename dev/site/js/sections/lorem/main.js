console.log('-- lorem loaded --');

define(['../AbstractSection'], function(AbstractSection) {

    var _section = new AbstractSection('Lorem');

    //example of how to overwrite normal behavior.
    //that's why we create a new module and keep functions as small as
    //possible, if the function have a single purpose it is easier to overwrite
    //it and customize the behavior.

    _section._animateIn = function() {
        //important to dispatch signal after initialization
        this.$_root.slideUp(0).stop(true).slideDown(500, this._boundInitialized);
    };

    _section._animateOut = function() {
        //finish dispatch after animation (and dispatch ended signal)
        this.$_root.stop(true).slideUp(500, this._boundDispose);
    };

    return _section;
});
