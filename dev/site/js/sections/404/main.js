define(
    [
        'jquery'
    ],
    function ($) {

        var $root;

        return {
            init : function(){
                if (! $root) {
                    $root = $('<h1 class="h1">404: page not found</h1>');
                    $root.appendTo('#wrapper');
                }
            },
            end : function(){
                if (!$root) return;
                $root.remove();
                $root = null;
            }
        };

    }
);

