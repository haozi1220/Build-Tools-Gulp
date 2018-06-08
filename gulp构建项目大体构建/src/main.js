/*
* @Author: 李杰
* @Date:   2018-03-19 10:40:24
* @Last Modified by:   李杰
* @Last Modified time: 2018-04-10 18:29:12
*/

// 两秒弹窗
;(function ($) {
    $.extend({
        'scrollTop': 0,
        'Modalshow': function (eles) {
            var ModalHelper = (function(bodyCls) {
                return {
                    afterOpen: function() {
                        $.scrollTop = $(window).scrollTop();
                        $('body').addClass(bodyCls);
                        $('body').attr('style', 'top: -' + $.scrollTop + 'px');
                    }
                };
            })('modal-open');
            $(eles).show();
            ModalHelper.afterOpen();
            $(eles).on('touchstart touchmove touchend', function(e) {
                e.stopPropagation();
            });
        },
        'Modalhide': function (eles) {
            var ModalHelper = (function(bodyCls) {
                return {
                    beforeClose: function() {
                        $('body').removeClass(bodyCls);
                        $(window).scrollTop($.scrollTop);
                    }
                };
            })('modal-open');
            $(eles).hide();
            ModalHelper.beforeClose();
        }
    });
})(window.jQuery);
