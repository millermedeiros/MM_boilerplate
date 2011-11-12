/** @license
 * CompoundSignal (https://github.com/millermedeiros/CompoundSignal/)
 * Author: Miller Medeiros - Version: 0.1.0 (2011/10/02)
 * Released under the MIT License
 */
(function (define) {

    define('CompoundSignal', ['signals'], function (signals) {


        var _signalProto = signals.Signal.prototype,
            _compoundProto = new signals.Signal();

        function slice(arr, offset){
            return Array.prototype.slice.call(arr, offset || 0);
        }

        // --

        function CompoundSignal(params){
            signals.Signal.call(this);

            var sigs = slice(arguments),
                n = sigs.length,
                binding;

            while(n--){
                binding = sigs[n].add(this._registerDispatch, this);
                binding.params = [n]; //use index to register params..
            }

            this._signals = sigs;
            this._params = [];
            this._resolved = false;
        }

        CompoundSignal.prototype = _compoundProto;
        CompoundSignal.prototype.constructor = CompoundSignal;

        _compoundProto.override = false;

        _compoundProto.unique = true;

        _compoundProto.memorize = true;

        _compoundProto._registerDispatch = function(idx, args){

            if(!this._params[idx] || this.override){
                this._params[idx] = slice(arguments, 1);
            }

            if( this._registeredAll() && (!this._resolved || !this.unique)){
                this.dispatch.apply(this, this._params);
            }
        };

        _compoundProto._registeredAll = function(){
            if(this._params.length !== this._signals.length){
                return false;
            } else {
                //check if any item is undefined, dispatched signals will
                //store an empty array if no param passed on dispatch..
                for(var i = 0, n = this._params.length; i < n; i += 1){
                    if(! this._params[i]){
                        return false;
                    }
                }
                return true;
            }
        };

        _compoundProto.dispatch = function(params){

            //if unique it should always dispatch same parameters
            //will act like a promise...
            params = (this._resolved && this.unique)? this._params : slice(arguments);
            this._resolved = true;

            _signalProto.dispatch.apply(this, params);

            if(this.unique){
                this.removeAll();
            } else {
                this.reset();
            }
        };

        _compoundProto.reset = function(){
            this._params.length = 0;
            this._resolved = false;
        };

        _compoundProto.isResolved = function(){
            return this._resolved;
        };

        _compoundProto.dispose = function(){
            _signalProto.dispose.call(this);
            delete this._signals;
            delete this._params;
        };

        _compoundProto.toString = function(){
            return '[CompoundSignal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        };


        //export
        signals.CompoundSignal = CompoundSignal;
        return CompoundSignal;
    });

}(typeof define === 'function' && define.amd ? define : function (id, deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('signals'));
    } else { //browser
        window['signals'][id] = factory(window['signals']);
    }
}));
