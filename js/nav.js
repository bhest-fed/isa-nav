// Navigation constructor Controller

var nav = (function(tocCtrl) {
    'use strict'

    // Declare private variables
    var _toc, _isaName, _gap, _filext;

    _toc = tocCtrl;
    _isaName = 'SyncviscBranded2017';
    _gap = '_';
    _filext = '.zip';

    // Private function to construct Veeva slide link
    var _buildLink = function(id) {

        // If no ID was pass set the ID to the default link
        if (_toc.links[id] == undefined || _toc.links[id] == '') {
            var navStr = _isaName + _gap + _toc.links[1] + _filext;
        } else {
            var navStr = _isaName + _gap + _toc.links[id] + _filext;
        }

        return navStr + ', ' + _isaName;
    };

    // API for Synvisc ISA to utilize Veeva Slide navigation
    return {
        gotoSlide: function(id) {
            var output, jumpToSlide;

            output = _buildLink(id);

            jumpToSlide = function() {
                iRepGoToSlide(output);
                // com.veeva.clm.gotoSlide(output);
            };

            // send link string to the Veeva method to process it
            jumpToSlide();
        }
    };
})(toc);