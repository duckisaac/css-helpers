/**
 * Browsers: IE8+, Chrome, Firefox, Opera, Safari
 * Usage: 
 * JS:
 * $('#test').rotate();
 * HTML&CSS
 * <div id="test" style="transform:rotate(45deg);border-bottom:1px solid #ddd;width:200px;" data-rotate="45"></div>
 * 
 * Author: Kathy
 */
(function($){
    $.fn.rotate = function(){
        return this.each(function(){
            var obj = $(this);
            if(navigator.appVersion.match(/MSIE 8/)){
                var degree = Math.PI * obj.data('rotate') / 180;
                var sin = Math.sin(degree);
                var cos = Math.cos(degree);
                var width = parseInt(obj.css('width').replace('px', '')) / 2;
                var offsetX = width * (1 - cos);
                var offsetY = width * Math.abs(sin);
                obj.css({'left': (parseInt(obj.css('left').replace('px', '')) + offsetX) + 'px'});
                obj.css({'top': (parseInt(obj.css('top').replace('px', '')) - offsetY) + 'px'});
                obj.css({'filter': 'progid:DXImageTransform.Microsoft.Matrix(SizingMethod="auto expand", M11=' + cos + ', M12=' + (-sin) + ', M21=' + sin + ', M22=' + cos + ')'});            
            }else if(!obj.css('transform')){
                var degree = obj.data('rotate');
                var transform = 'rotate(' + degree + 'deg)';
                obj.css({
                    '-ms-transform': transform,
                    '-webkit-transform': transform,
                    '-moz-transform': transform,
                    '-o-transform': transform
                });
            }
        });
    };
})(jQuery);
