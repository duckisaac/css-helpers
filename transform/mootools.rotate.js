/**
 * Browsers: IE8+, Chrome, Firefox, Opera, Safari
 * Usage: 
 * JS:
 * Array.each($$('.elements'), function(obj, index){       
 *     obj.rotate();
 *  });
 * HTML&CSS
 * <div style="transform:rotate(45deg);border-bottom:1px solid #ddd;width:200px;" data-rotate="45"></div>
 * 
 * Author: Kathy
 */
Element.implement('rotate', function(){
    if(navigator.appVersion.match(/MSIE 8/)){
        var degree = Math.PI * this.getProperty('data-rotate') / 180;
        var sin = Math.sin(degree);
        var cos = Math.cos(degree);
        var width = parseInt(this.getStyle('width').replace('px', '')) / 2;
        var offsetX = width * (1 - cos);
        var offsetY = width * Math.abs(sin);
        this.setStyle('left', (parseInt(this.getStyle('left').replace('px', '')) + offsetX) + 'px');
        this.setStyle('top', (parseInt(this.getStyle('top').replace('px', '')) - offsetY) + 'px');
        this.setStyle('filter', 'progid:DXImageTransform.Microsoft.Matrix(SizingMethod="auto expand", M11=' + cos + ', M12=' + (-sin) + ', M21=' + sin + ', M22=' + cos + ')');            
    }else if(!this.getStyle('transform')){
        var degree = this.getProperty('data-rotate');
        var transform = 'rotate(' + degree + 'deg)';
        this.setStyle('-ms-transform', transform).setStyle('-webkit-transform', transform).setStyle('-moz-transform', transform).setStyle('-o-transform', transform);
    }
});
    
