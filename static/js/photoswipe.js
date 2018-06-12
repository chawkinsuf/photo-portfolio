$(function() {

    var getHashParameter = function(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[#&]' + name + '=([^&]*)');
        var hash = window.location.hash;
        var results = regex.exec(hash);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    var launchPhotoSwipe = function(index) {

        var items = [];
        $('.grid-item').each(function() {

            var item = {
                src: $(this).data('image'),
                w: $(this).data('width'),
                h: $(this).data('height'),
                pid: $(this).data('pid'),
                title: $(this).data('title'),
                msrc: $(this).attr('src'),
                el: $(this)
            };

            items.push(item);
        });

        var options = {
            index: index,
            shareEl: false,
            galleryUID: $('.grid').data('gid'),
            getThumbBoundsFn: function(index) {
                var el = items[index].el;
                var width = el.width();
                var offset = el.offset();
                return { x: offset.left, y: offset.top, w: width };
            }
        };

        var pswpElement = $('.pswp');
        var gallery = new PhotoSwipe(pswpElement[0], PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    var gid = getHashParameter('gid');
    var pid = getHashParameter('pid');
    if (gid && pid) {
        var el = $("div[data-gid='" + gid + "'] img[data-pid='" + pid + "']");
        if (el) {
            var index = el.index() - 1;
            launchPhotoSwipe(index);
        }
    }

    $('.grid-item').click(function() {
        var index = $(this).index() - 1;
        launchPhotoSwipe(index);
    });

});
