var utils = (function ($) {
    return {
        createNodes: function (list) {
            var result = {};

            for (key in list) {
                result[key] = $(list[key]);
            }

            return result;
        }
    }
})(jQuery);