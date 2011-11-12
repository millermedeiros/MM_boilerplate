console.log('-- lorem/ipsum loaded --');


define(['text!./template.html'], function (template) {

    // example of a custom sub-section
    // ---
    // note that only method required is "init()" and this section doesn't have
    // the signals "initialized" and "ended" so other sections won't wait the
    // animation to end before starting...

    var $_root;

    function init(id) {
        console.log('[lorem/ipsum.init]');

        if (! $_root) {
            $_root = $(template);
            $_root.appendTo('#wrapper').slideUp(0).slideDown(200);
        }

        update(id);
    }

    function update(id) {
        $_root.find('.id').text(id);
    }

    function end() {
        console.log('[lorem/ipsum.end]');
        if (! $_root) return;
        $_root.stop(true).remove();
        $_root = null;
    }

    return {
        init : init,
        end : end
    };
});
