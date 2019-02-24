(function() {
	//nRicardo 
	var main = function($) { 
		
		var self = $.nRicardo = new function(){};
		
		$.extend(self, {
			nRicardoImgs : [
			'http://109.169.29.229/Ricardo/01.gif',
			'http://109.169.29.229/Ricardo/02.gif',
			'http://109.169.29.229/Ricardo/03.gif',
			'http://109.169.29.229/Ricardo/04.gif',
			'http://109.169.29.229/Ricardo/05.gif',
			'http://109.169.29.229/Ricardo/06.gif',
			'http://109.169.29.229/Ricardo/07.gif',
			'http://109.169.29.229/Ricardo/08.gif',
			'http://109.169.29.229/Ricardo/09.gif',
			'http://109.169.29.229/Ricardo/10.gif',
			'http://109.169.29.229/Ricardo/11.gif',
			'http://109.169.29.229/Ricardo/12.gif',
			'http://109.169.29.229/Ricardo/13.gif',
			'http://109.169.29.229/Ricardo/14.gif',
			'http://109.169.29.229/Ricardo/15.gif',
			'http://109.169.29.229/Ricardo/16.gif',
			'http://109.169.29.229/Ricardo/17.gif',
			'http://109.169.29.229/Ricardo/18.gif',
			'http://109.169.29.229/Ricardo/19.gif',
			'http://109.169.29.229/Ricardo/20.gif',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nRicardoImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 
