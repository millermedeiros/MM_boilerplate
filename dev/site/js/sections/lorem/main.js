console.log('-- lorem loaded --');

define(['../AbstractSection'], function(AbstractSection) {

    var _section = new AbstractSection('Lorem');

    //example of how to overwrite normal behavior.
    //that's why we create a new module and keep functions as small as
    //possible, if the function have a single purpose it is easier to overwrite
    //it and customize the behavior.

    _section._animateIn = function() {
        //safe-guard in case the element doesn't exist anymore
        if (! this.$_root ) return;

        //important to dispatch signal after initialization
        this.$_root.hide().show(500, this._boundInitialized);
    };

    return _section;
});
