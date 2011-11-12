console.log('-- AbstractSection loaded --');

define([
       'signals',
       'mustache',
       'text!./AbstractSection.mustache'
    ],
    function (signals, mustache, template) {


        //Just an example of how to create an abstract class to handle
        //section logic..
        //on a real project I would probably make the abstract class accept
        //a template file and also the data to populate the template or would
        //add hooks for getting the data based on the arguments passed to
        //`init()`.


        function AbstractSection(sectionName) {
            this._sectionName = sectionName;

            // initialized and ended signals are only needed if you are doing something
            // asynchronous during initialization or removal.
            // only method that should be always implemented is the `init()`.
            // If you add the signals to the public interface the sectionController
            // will listen for dispatchs, otherwise it will consider that everything
            // happened synchronously.
            this.initialized = new signals.Signal();
            this.ended = new signals.Signal();

            //solve scope issues
            this._boundInitialized = $.proxy(this.initialized.dispatch, this.initialized);
            this._boundDispose = $.proxy(this._dispose, this);
        }

        AbstractSection.prototype = {

            init : function () {
                console.log('[AbstractSection.init]', arguments);

                var args = Array.prototype.slice.call(arguments);

                if (this.$_root) {
                    //every time it matches same route with different
                    //parameters it will call the method `init()`
                    //so we just update the content
                    this._update(args);
                } else {
                    //otherwise we build the section
                    this._build(args);
                }

            },

            _update : function (args) {
                this.$_root
                    .find('.simplelist')
                    .empty()
                    .append( mustache.parse('{{#args}}<li>{{.}}</li>{{/args}}', {args: args}) );
            },

            _build : function (args) {
                this.$_root = $( mustache.parse(template, {
                        sectionName : this._sectionName
                    }) );

                this._update(args); //reuse same method so we keep DRY

                //append after adding content to improv perf
                this.$_root.appendTo('#wrapper');
                this._animateIn();
            },

            _animateIn : function () {
                //so we can easily overwrite this method to do wathever we want
                if (! this.$_root ) return;

                this.$_root
                    .fadeTo(0, 0)
                    .stop(true, true)
                    .fadeTo(500, 1, this._boundInitialized);
            },

            end : function () {
                console.log('[AbstractSection.end]');
                if (! this.$_root) {
                    //safe guard against fast changes
                    //needs to dispatch signal in case of synchronous
                    //changes (since it has the ended signal on the public
                    //interface) otherwise it may break section change
                    this.ended.dispatch();
                    return;
                }
                this.$_root.stop(true).fadeTo(500, 0, this._boundDispose);
            },

            _dispose : function () {
                this.$_root.remove();
                this.ended.dispatch();
                this.$_root = null;
            }

        };


        return AbstractSection;
    }
);
