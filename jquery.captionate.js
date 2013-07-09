// This software is licensed under the MIT License, http://www.opensource.org/licenses/mit-license.php
// Copyright (c) 2011 High Integrity Design, LLC.    http://www.highintegritydesign.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
// and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.
// *************************************************************************************************************
//
// convert all img.captions into HTML5 <figure> and <figcaption>. For discussion, see: 
// http://www.highintegritydesign.com/blog/articles/image-captions-in-html5-using-figcaption-and-jquery
//
(function($) {
	$.fn.captionate = function() {
		return this.each(function() { 
            
            var   $this = $(this), // save a reference to the current img.caption element
                    altText = $this.attr('title'), // grab the value of the image ALT attribute		
                    imgWidth = $this.width(), // grab the width of the image
                    classList = $this.attr('class'); // save any classes attached to the <img>

            $this.removeAttr('class'); // remove any classes from the original <img> element
            
            // check and see if the image is contained in an immediate parent anchor link. 
            // if it is, construct a <figure> wrapping the anchor link instead of wrapping the <img>
            // add the <figcaption> after the link, using the ALT element
            // set the <figure> width to be the same as the <img>
            // add back in any classes from the original <img> to the new <figure>
            // finally move the new <figure> to be just before the paragraph it was contained in.
            var $parentAnchorLink = $this.parent();
            if ($parentAnchorLink.is('a')) {
                $newFigure = $parentAnchorLink.wrap('<figure></figure>').parent(); 
                $parentAnchorLink.after('<figcaption>' + altText + '</figcaption>');
                $newFigure.width(imgWidth);
                $newFigure.addClass(classList);
                $newFigure.parent('p').before($newFigure);                
            }
            // or else it's just an image tag, not wrapped with an anchor link.
            // so do all the same as above except wrap the <img> instead of an anchor link
            else {
                $newFigure = $this.wrap('<figure></figure>').parent(); 
                $this.after('<figcaption>' + altText + '</figcaption>');
                $newFigure.width(imgWidth);
                $newFigure.addClass(classList);
                $newFigure.parent('p').before($newFigure);                
            }
        });
    };
})(jQuery);
    

