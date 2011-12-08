console.log('-- AbstractSection loaded --');

define([
       'signals',
       'mustache',
       'text!./AbstractSection.mustache'
    ],
    function (signals, mustache, template) {


        //Just an example of how to create an abstract "class" to handle
        //section logic..
        //on a real project I would probably make the AbstractSection accept
        //a template file and also the data to populate the template or would
        //add hooks for getting the data based on the arguments passed to
        //`init()`.


        function AbstractSection(sectionName) {
            this._sectionName = sectionName;

            // initialized and ended signals are only needed if you are doing something
            // asynchronous during initialization or removal.
            // only method that should be always implemented is the `init()`
            // (if returned module isn't a constructor) if module is
            // a constructor it will instantiate object and won't call
            // `init()`.
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

            init : function (parentSelector) {
                console.log('[AbstractSection.init]', arguments);

                //pass parent selector as first param to make it easier to
                //update node if needed... avoid hard coding values.
                this.$_parent = $(parentSelector);

                var args = Array.prototype.slice.call(arguments);

                if (this.$_root) {
                    //every time it matches same route with different
                    //parameters it will call the method `init()`
                    //so we just update the content
                    this._update(args);
                    //notify sectionController it finished transition
                    this.initialized.dispatch();
                } else {
                    //otherwise we build the section
                    this._setup(args);
                }

            },

            _update : function (args) {
                this.$_root
                    .find('.simplelist')
                    .empty()
                    .append( mustache.parse('{{#args}}<li>{{.}}</li>{{/args}}', {args: args}) );
            },

            _setup : function(args){
                //on a real project I would probably use some promises to chain
                //these calls (so they can be async)
                this._build(args);
                this._afterBuild(args);
                this._animateIn();
            },

            _build : function (args) {
                this.$_root = $( mustache.parse(template, {
                        sectionName : this._sectionName
                    }) );

                this._update(args); //reuse same method so we keep DRY

                this.$_root.appendTo(this.$_parent);
            },

            //overwrite if needed
            _afterBuild : $.noop,

            //break into a separate method so we can easily overwrite it
            //to do wathever we want
            _animateIn : function () {
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
                this._animateOut();
            },

            _animateOut : function(){
                this.$_root.stop(true).fadeTo(500, 0, this._boundDispose);
            },

            _dispose : function () {
                this.$_root.remove();
                this.ended.dispatch();
                this.$_root = this.$_parent = null;
            }

        };


        return AbstractSection;
    }
);
