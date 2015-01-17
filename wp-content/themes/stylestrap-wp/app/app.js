
/*
========================================================================================================================================
	
	APP NAME HERE

	This Javascript file uses jQuery as a dependency and is structured in the revealing module pattern. 

	Please see these links for more detail:
	http://www.raymondcamden.com/2013/5/13/JavaScript-Design-Patterns--The-Revealing-Module-Pattern
	http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern 

===========================================================================================================================================
*/



/*
=============================================================================
	EVENTS AND RESPONDING TO USER INTERACTION
	This is where we're actually putting our modules into play based on 
	user actions such as loading, scrolling, resizing, and clicking
=============================================================================
*/
jQuery(document).ready(function($) {
   // ** There should be no actual functions here, all actual functions 

   // init calls for each module (as needed)
   app.utility.init();

   // Hook your modules into event handlers here
   $(window).resize(function(){ app.utility.resize(); });
   $(window).scroll(function(){ app.utility.onScroll(); });

});


/*
=============================================================================
	BEGIN MODULES
	We start by scoping everything to a private module named for the app
=============================================================================
*/
var app = (function($) {

	/*
	==========================================================================
	UTILITY 
	Utility functions call other functions, route data, and create tools for other functions to use
	==========================================================================
	*/

	var utility = (function() {

		// PUT ALL YOUR VARIABLES AND SETTINGS FOR THIS MODULE HERE
		var debug = false;
		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

		/*
		=============================================================================
		CONIDTIONIZR IS FOR DETECTING FRONT END ENVIRONMENTS SO YOU KNOW WHAT THE USER CAN DO
		http://conditionizr.com/
		=============================================================================
		*/
		var init = function() { 
			
			/*
			=============================================================================
			CONIDTIONIZR IS FOR DETECTING FRONT END ENVIRONMENTS SO YOU KNOW WHAT THE USER CAN DO
			http://conditionizr.com/
			=============================================================================
			*/
			conditionizr({ //http://www.noupe.com/development/conditionizr-for-jquery-conditional-loader-for-scripts-and-styles-74276.html
				debug      : false,
				scriptSrc  : 'js/conditionizr/',
				styleSrc   : 'apps/conditionizr/',
				ieLessThan : {
					active: true,
					version: '9',
					scripts: false,
					styles: false,
					classes: true,
					customScript: // Separate polyfills with commas
						'//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js, //cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js'
					},
				chrome     : { scripts: false, styles: false, classes: true, customScript: false },
				safari     : { scripts: false, styles: false, classes: true, customScript: false },
				opera      : { scripts: false, styles: false, classes: true, customScript: false },
				firefox    : { scripts: false, styles: false, classes: true, customScript: false },
				ie10       : { scripts: false, styles: false, classes: true, customScript: false },
				ie9        : { scripts: false, styles: false, classes: true, customScript: false },
				ie8        : { scripts: false, styles: false, classes: true, customScript: false },
				ie7        : { scripts: false, styles: false, classes: true, customScript: false },
				ie6        : { scripts: false, styles: false, classes: true, customScript: false },
				retina     : { scripts: false, styles: false, classes: true, customScript: false },
				touch      : { scripts: false, styles: false, classes: true, customScript: false },
				mac        : true,
				win        : true,
				x11        : true,
				linux      : true
			});

			if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) { // Disable scaling until user begins a gesture (prevents zooming when user rotates to landscape mode)
				var viewportmeta = document.querySelector('meta[name="viewport"]');
				if (viewportmeta) {
					viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
					document.body.addEventListener('gesturestart', function () {
						viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
					}, false);
				}
			}

			/*
			=============================================================================
			HOOK INTO ANY PLUGIN's 
			=============================================================================
			*/
			
		};

		var onScroll = function() { // Called when the browser window is scrolled
			// Functions
		};

		var resize = function() { // Called when the browser window is resized
			// Functions
		};

		var responsiveState = function(req) { // Returns what responsive state we're at. Values based on appS media queries.
			// Below is an idiotic bug fix.
			// Chrome & Safari exclude scrollbars from window width for appS media queries.
			// Firefox, Opera and IE include scrollbars in window width for appS media queries, but not in JS.
			// So we have to add some px to the window width for Firefox, Opera and IE so that breakpoints
			// match up between appS and JS. What a world.
			if ($('html').hasClass('chrome') || $('html').hasClass('safari')) {
				var winWidth = $(window).width();
			}
			else {
				var winWidth = $(window).width() + 17;
			}

			if (typeof req === 'undefined' || req === 'state') {
				// MODIFY THESE IF STATEMENTS TO MATCH YOUR RESPONSIVE WIDTHS
				if (winWidth >= 1025) {
					return 'full';
				}
				if (winWidth >= 768 && winWidth <= 1024) {
					return 'compressed';
				}
				if (winWidth <= 767) {
					return 'oneCol';
				}
				// STOP MODIFYING HERE.
			}
			else {
				return winWidth;
			}
		};

		return  {
			init: init,
			onScroll: onScroll,
			resize: resize,
			responsiveState: responsiveState
		}
	})();

	/*
	=============================================================================
	THIS IS WHERE YOU CREATE YOUR VARIOUS MODULES BASED ON THE APP YOU'RE CREATING		
	=============================================================================
	*/
	var moduleName = (function() {

		var init = function() { // if you need it

		};

		var example = function() { // Matches the height of various elements to other elements in ways that are impossible with appS alone
			
		};

		// public
		return {
			init: init,
			example: example
		};

	})(); // var uiMod = (function() {

	

	// public
	return {
		utility: utility,
		moduleName: moduleName
	};
})(jQuery); // var app = (function() {