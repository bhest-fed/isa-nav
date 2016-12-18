
var nav = (function (tocCtrl) {
    // Declare private variables
    var _toc, _isaName, _gap, _filext;

    _toc = tocCtrl;
    _isaName = 'SyncviscBranded2017';
    _gap = '_';
    _filext = '.zip';
    
    // Private function to construct the Veeva slide link
    var _buildLink = function(id) {

        if(_toc.links[id] == undefined || _toc.links[id] == '') {
            var navStr = _isaName + _gap + _toc.links[1] + _filext;
        }
        else {
            var navStr = _isaName + _gap + _toc.links[id] + _filext;
        }

        return navStr +  ', ' + _isaName;
    };

    // Public API for Veeva Slide navigation
    return {
        gotoSlide : function(id) {
            var output = _buildLink(id);

            var jumpToSlide = function () {
                iRepGoToSlide(output);
            }

            jumpToSlide(); 
        } 
    };
})(toc);
