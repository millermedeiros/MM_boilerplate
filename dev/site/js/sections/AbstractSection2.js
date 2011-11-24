define(['amd-utils/lang/createObject', './AbstractSection'], function (createObject, AbstractSection) {

    // same thing as AbstractSection but automatically calls init.
    function AbstractSection2(name, rest){
        AbstractSection.call(this, name);

        // important to set `memorize = true` since SectionController may add
        // listener after signal was already dispatched.
        // (signal only exists after constructor is called)
        this.initialized.memorize = true;
        this.ended.memorize = true;

        this.init.apply(this, Array.prototype.slice.call(arguments, 1));
    }

    AbstractSection2.prototype = createObject(AbstractSection.prototype);

    return AbstractSection2;

});
