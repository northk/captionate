jquery.captionate.js
====================

I wanted to create image captions for my blog using HTML5, so I was excited to find out that HTML5 provides the new `<figure>` and `<figcaption>` elements. The HTML5 spec says that's exactly what these elements are intended for. 

I wanted clients to be able to easily upload an image into their page using a content management system, then mark the image as "having a caption" using a CSS class. I realized I needed to write a JQuery script which would grab the "marked" image and automatically generate the code for `<figure>` and `<figcaption>` around the original image. The script would use the image's ALT attribute to supply the caption text. 

See example.html for an example of how to use the script. And, see [my blog article](http://www.highintegritydesign.com/blog/articles/image-captions-in-html5-using-figcaption-and-jquery) for a complete tutorial on how the script works. 

This code is licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Written by North Krimsly of [www.highintegritydesign.com](http://www.highintegritydesign.com)