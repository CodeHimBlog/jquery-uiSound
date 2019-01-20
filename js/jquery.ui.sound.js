/*  Plugin: uiSound (play sound on different ui events)
 *   Frameworks: jQuery 3.3.1
 *   Author: Asif Mughal
 *   GitHub: https://github.com/CodeHimBlog
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2019 - Asif Mughal
 */
/* File: jquery.ui.sound.js */
(function($){
      $.fn.uiSound = function(options) {
      var loc = $.extend({
    		        play: '', //name of sound file
                dur: 3, //duration in seconds (optional)
  		   }, options);
  
        return this.each(function() {

       var $player = document.createElement("audio");
       var $sound = document.createElement("source");
       var soundBox = document.createElement("section");

$($player).attr({

'autoplay': 'true',

});
   
$($sound).attr({
   'type' : 'audio/wav',
   'src' : 'sound/'+loc.play+'.wav',
}).appendTo($player);


$(soundBox).css({
'width' : '0',
'height' : '0',
'overflow' : 'hidden',
}).append($player).appendTo("body");

var $du = loc.dur*1000;

      setTimeout(function(){
      $(soundBox).empty().remove(200);

   }, $du);

        });

      };
    
    })(jQuery);
/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
