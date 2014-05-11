
$(document).ready(function() {
/*
		var oTable = $("#calendar_dates").dataTable( {
				"sScrollX" : "100%",
				"sScrollXInner" : "200%",
				"bScrollCollapse" : true,
				"bAutoWidth" : false,
				"bSortClasses": false
			
		});
		
		
		var numCols = 20;
		
		$("#calendar_dates .main td").click(function () {
				$('#add_modal').foundation('reveal', 'open');
		});
		
		$('td', oTable.fnGetNodes()).hover( function() {
		//console.log("THIS " + $('#calendar_dates td').index(this));
		var iCol = $('#calendar_dates td').index(this) % numCols;
		//console.log(iCol);
		var nTrs = oTable.fnGetNodes();
		$('td:nth-child('+(iCol+1)+')', nTrs).addClass( 'highlighted' );
	}, function() {
		$('td.highlighted', oTable.fnGetNodes()).removeClass('highlighted');
		} );
	
*/

	// implementation of disabled form fields

		
});


$.extend( true, $.fn.dataTable.defaults, {
	"sDom": "t",
	"oLanguage": {
		"sLengthMenu": "_MENU_ records per page"
	}
} );





// In 1.10 we use the pagination renderers to draw the Bootstrap paging,
// rather than  custom plug-in
if ( $.fn.dataTable.Api ) {
	$.fn.dataTable.defaults.renderer = 'foundation';
	$.fn.dataTable.ext.renderer.pageButton.foundation = function ( settings, host, idx, buttons, page, pages ) {
		var api = new $.fn.dataTable.Api( settings );
		var classes = settings.oClasses;
		var lang = settings.oLanguage.oPaginate;
		var btnDisplay, btnClass;

		var attach = function( container, buttons ) {
			var i, ien, node, button;
			var clickHandler = function ( e ) {
				e.preventDefault();
				if ( e.data.action !== 'ellipsis' ) {
					api.page( e.data.action ).draw( false );
				}
			};

			for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
				button = buttons[i];

				if ( $.isArray( button ) ) {
					attach( container, button );
				}
				else {
					btnDisplay = '';
					btnClass = '';

					switch ( button ) {
						case 'ellipsis':
							btnDisplay = '&hellip;';
							btnClass = 'unavailable';
							break;

						case 'first':
							btnDisplay = lang.sFirst;
							btnClass = button + (page > 0 ?
								'' : ' unavailable');
							break;

						case 'previous':
							btnDisplay = lang.sPrevious;
							btnClass = button + (page > 0 ?
								'' : ' unavailable');
							break;

						case 'next':
							btnDisplay = lang.sNext;
							btnClass = button + (page < pages-1 ?
								'' : ' unavailable');
							break;

						case 'last':
							btnDisplay = lang.sLast;
							btnClass = button + (page < pages-1 ?
								'' : ' unavailable');
							break;

						default:
							btnDisplay = button + 1;
							btnClass = page === button ?
								'current' : '';
							break;
					}

					if ( btnDisplay ) {
						node = $('<li>', {
								'class': classes.sPageButton+' '+btnClass,
								'aria-controls': settings.sTableId,
								'tabindex': settings.iTabIndex,
								'id': idx === 0 && typeof button === 'string' ?
									settings.sTableId +'_'+ button :
									null
							} )
							.append( $('<a>', {
									'href': '#'
								} )
								.html( btnDisplay )
							)
							.appendTo( container );

						settings.oApi._fnBindAction(
							node, {action: button}, clickHandler
						);
					}
				}
			}
		};

		attach(
			$(host).empty().html('<ul class="pagination"/>').children('ul'),
			buttons
		);
	}
}
else {
	// Integration for 1.9-
	$.fn.dataTable.defaults.sPaginationType = 'foundation';

	/* API method to get paging information */
	$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
	{
		return {
			"iStart":         oSettings._iDisplayStart,
			"iEnd":           oSettings.fnDisplayEnd(),
			"iLength":        oSettings._iDisplayLength,
			"iTotal":         oSettings.fnRecordsTotal(),
			"iFilteredTotal": oSettings.fnRecordsDisplay(),
			"iPage":          oSettings._iDisplayLength === -1 ?
				0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
			"iTotalPages":    oSettings._iDisplayLength === -1 ?
				0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
		};
	};


	/* Bootstrap style pagination control */
	$.extend( $.fn.dataTableExt.oPagination, {
		"foundation": {
			"fnInit": function( oSettings, nPaging, fnDraw ) {
				var oLang = oSettings.oLanguage.oPaginate;
				var fnClickHandler = function ( e ) {
					e.preventDefault();
					if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
						fnDraw( oSettings );
					}
				};

				$(nPaging).append(
					'<ul class="pagination">'+
						'<li class="prev arrow unavailable"><a href="">&laquo;</a></li>'+
						'<li class="next arrow unavailable"><a href="">&raquo;</a></li>'+
					'</ul>'
				);
				var els = $('a', nPaging);
				$(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
				$(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
			},

			"fnUpdate": function ( oSettings, fnDraw ) {
				var iListLength = 5;
				var oPaging = oSettings.oInstance.fnPagingInfo();
				var an = oSettings.aanFeatures.p;
				var pages = [];
				var i, ien, klass, host;

				// This could use some improving - however, see
				// https://github.com/DataTables/DataTables/issues/163 - this will
				// be changing in the near future, so not much point in doing too
				// much just now
				if ( oPaging.iTotalPages <= 6 ) {
					for ( i=0 ; i<oPaging.iTotalPages ; i++ ) {
						pages.push( i );
					}
				}
				else {
					// Current page
					pages.push( oPaging.iPage );

					// After current page
					var pagesAfter = oPaging.iPage + 2 >= oPaging.iTotalPages ?
						oPaging.iTotalPages :
						oPaging.iPage + 2;
					for ( i=oPaging.iPage+1 ; i<pagesAfter ; i++ ) {
						pages.push( i );
					}

					// After gap
					if ( pagesAfter < oPaging.iTotalPages-2 ) {
						pages.push( null );
					}

					// End
					if ( $.inArray( oPaging.iTotalPages-2, pages ) === -1 && oPaging.iPage < oPaging.iTotalPages-2 ) {
						pages.push( oPaging.iTotalPages-2 );
					}
					if ( $.inArray( oPaging.iTotalPages-1, pages ) === -1 ) {
						pages.push( oPaging.iTotalPages-1 );
					}

					// Pages before
					var pagesBefore = oPaging.iPage - 2 > 0 ?
						oPaging.iPage - 2 :
						0;
					for ( i=oPaging.iPage-1 ; i>pagesBefore ; i-- ) {
						pages.unshift( i );
					}

					// Before gap
					if ( pagesBefore > 1 ) {
						pages.unshift( null );
					}

					// Start
					if ( $.inArray( 1, pages ) === -1 && oPaging.iTotalPages > 1 ) {
						pages.unshift( 1 );
					}
					if ( $.inArray( 0, pages ) === -1 ) {
						pages.unshift( 0 );
					}
				}

				for ( i=0, ien=an.length ; i<ien ; i++ ) {
					// Remove the middle elements
					host = an[i];
					$('li:gt(0)', host).filter(':not(:last)').remove();

					// Add the new list items and their event handlers
					$.each( pages, function( i, page ) {
						klass = page === null ? 'unavailable' :
							page === oPaging.iPage ? 'current' : '';
						$('<li class="'+klass+'"><a href="">'+(page===null? '&hellip;' : page+1)+'</a></li>')
							.insertBefore( $('li:last', host) )
							.bind('click', function (e) {
								e.preventDefault();
								var pageNum = parseInt($('a', this).text(),10);
								if ( ! isNaN(pageNum)) {
									oSettings._iDisplayStart = (pageNum-1) * oPaging.iLength;
									fnDraw( oSettings );
								}
							} );
					} );

					// Add / remove disabled classes from the static elements
					if ( oPaging.iPage === 0 ) {
						$('li:first', host).addClass('unavailable');
					} else {
						$('li:first', host).removeClass('unavailable');
					}

					if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
						$('li:last', host).addClass('unavailable');
					} else {
						$('li:last', host).removeClass('unavailable');
					}
				}
			}
		}
	} );
}


/*
 * TableTools Foundation compatibility
 * Required TableTools 2.1+
 */
if ( $.fn.DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Foundation
	$.extend( true, $.fn.DataTable.TableTools.classes, {
		"container": "DTTT button-group",
		"buttons": {
			"normal": "button",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible dropdown
	$.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// taken from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
	function hasParent( e, id ) {
		if (!e) return false;
		var el = e.target||e.srcElement||e||false;
		while (el && el.id != id) {
			el = el.parentNode||false;
		}
		return (el!==false);
	}

	// returns the depth of the element "e" relative to element with id=id
	// for this calculation only parents with classname = waypoint are considered
	function getLevelDepth( e, id, waypoint, cnt ) {
		cnt = cnt || 0;
		if ( e.id.indexOf( id ) >= 0 ) return cnt;
		if( classie.has( e, waypoint ) ) {
			++cnt;
		}
		return e.parentNode && getLevelDepth( e.parentNode, id, waypoint, cnt );
	}

	// http://coveroverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	// returns the closest element to 'e' that has class "classname"
	function closest( e, classname ) {
		if( classie.has( e, classname ) ) {
			return e;
		}
		return e.parentNode && closest( e.parentNode, classname );
	}

	function mlPushMenu( el, trigger, options ) {	
		this.el = el;
		this.trigger = trigger;
		this.options = extend( this.defaults, options );
		// support 3d transforms
		this.support = Modernizr.csstransforms3d;
		if( this.support ) {
			this._init();
		}
	}

	mlPushMenu.prototype = {
		defaults : {
			// overlap: there will be a gap between open levels
			// cover: the open levels will be on top of any previous open level
			type : 'overlap', // overlap || cover
			// space between each overlaped level
			levelSpacing : 40,
			// classname for the element (if any) that when clicked closes the current level
			backClass : 'mp-back'
		},
		_init : function() {
			// if menu is open or not
			this.open = false;
			// level depth
			this.level = 0;
			// the moving wrapper
			this.wrapper = document.getElementById( 'mp-pusher' );
			// the mp-level elements
			this.levels = Array.prototype.slice.call( this.el.querySelectorAll( 'div.mp-level' ) );
			// save the depth of each of these mp-level elements
			var self = this;
			this.levels.forEach( function( el, i ) { el.setAttribute( 'data-level', getLevelDepth( el, self.el.id, 'mp-level' ) ); } );
			// the menu items
			this.menuItems = Array.prototype.slice.call( this.el.querySelectorAll( 'li' ) );
			// if type == "cover" these will serve as hooks to move back to the previous level
			this.levelBack = Array.prototype.slice.call( this.el.querySelectorAll( '.' + this.options.backClass ) );
			// event type (if mobile use touch events)
			this.eventtype = mobilecheck() ? 'touchstart' : 'click';
			// add the class mp-overlap or mp-cover to the main element depending on options.type
			classie.add( this.el, 'mp-' + this.options.type );
			// initialize / bind the necessary events
			this._initEvents();
		},
		_initEvents : function() {
			var self = this;

			// the menu should close if clicking somewhere on the body
			var bodyClickFn = function( el ) {
				self._resetMenu();
				el.removeEventListener( self.eventtype, bodyClickFn );
			};

			// open (or close) the menu
			this.trigger.addEventListener( this.eventtype, function( ev ) {
				ev.stopPropagation();
				ev.preventDefault();
				if( self.open ) {
					self._resetMenu();
				}
				else {
					self._openMenu();
					// the menu should close if clicking somewhere on the body (excluding clicks on the menu)
					document.addEventListener( self.eventtype, function( ev ) {
						if( self.open && !hasParent( ev.target, self.el.id ) ) {
							bodyClickFn( this );
						}
					} );
				}
			} );

			// opening a sub level menu
			this.menuItems.forEach( function( el, i ) {
				// check if it has a sub level
				var subLevel = el.querySelector( 'div.mp-level' );
				if( subLevel ) {
					el.querySelector( 'a' ).addEventListener( self.eventtype, function( ev ) {
						ev.preventDefault();
						var level = closest( el, 'mp-level' ).getAttribute( 'data-level' );
						if( self.level <= level ) {
							ev.stopPropagation();
							classie.add( closest( el, 'mp-level' ), 'mp-level-overlay' );
							self._openMenu( subLevel );
						}
					} );
				}
			} );

			// closing the sub levels :
			// by clicking on the visible part of the level element
			this.levels.forEach( function( el, i ) {
				el.addEventListener( self.eventtype, function( ev ) {
					ev.stopPropagation();
					var level = el.getAttribute( 'data-level' );
					if( self.level > level ) {
						self.level = level;
						self._closeMenu();
					}
				} );
			} );

			// by clicking on a specific element
			this.levelBack.forEach( function( el, i ) {
				el.addEventListener( self.eventtype, function( ev ) {
					ev.preventDefault();
					var level = closest( el, 'mp-level' ).getAttribute( 'data-level' );
					if( self.level <= level ) {
						ev.stopPropagation();
						self.level = closest( el, 'mp-level' ).getAttribute( 'data-level' ) - 1;
						self.level === 0 ? self._resetMenu() : self._closeMenu();
					}
				} );
			} );	
		},
		_openMenu : function( subLevel ) {
			// increment level depth
			++this.level;

			// move the main wrapper
			var levelFactor = ( this.level - 1 ) * this.options.levelSpacing,
				translateVal = this.options.type === 'overlap' ? this.el.offsetWidth + levelFactor : this.el.offsetWidth;
			
			this._setTransform( 'translate3d(' + translateVal + 'px,0,0)' );

			if( subLevel ) {
				// reset transform for sublevel
				this._setTransform( '', subLevel );
				// need to reset the translate value for the level menus that have the same level depth and are not open
				for( var i = 0, len = this.levels.length; i < len; ++i ) {
					var levelEl = this.levels[i];
					if( levelEl != subLevel && !classie.has( levelEl, 'mp-level-open' ) ) {
						this._setTransform( 'translate3d(-100%,0,0) translate3d(' + -1*levelFactor + 'px,0,0)', levelEl );
					}
				}
			}
			// add class mp-pushed to main wrapper if opening the first time
			if( this.level === 1 ) {
				classie.add( this.wrapper, 'mp-pushed' );
				this.open = true;
			}
			// add class mp-level-open to the opening level element
			classie.add( subLevel || this.levels[0], 'mp-level-open' );
		},
		// close the menu
		_resetMenu : function() {
			this._setTransform('translate3d(0,0,0)');
			this.level = 0;
			// remove class mp-pushed from main wrapper
			classie.remove( this.wrapper, 'mp-pushed' );
			this._toggleLevels();
			this.open = false;
		},
		// close sub menus
		_closeMenu : function() {
			var translateVal = this.options.type === 'overlap' ? this.el.offsetWidth + ( this.level - 1 ) * this.options.levelSpacing : this.el.offsetWidth;
			this._setTransform( 'translate3d(' + translateVal + 'px,0,0)' );
			this._toggleLevels();
		},
		// translate the el
		_setTransform : function( val, el ) {
			el = el || this.wrapper;
			el.style.WebkitTransform = val;
			el.style.MozTransform = val;
			el.style.transform = val;
		},
		// removes classes mp-level-open from closing levels
		_toggleLevels : function() {
			for( var i = 0, len = this.levels.length; i < len; ++i ) {
				var levelEl = this.levels[i];
				if( levelEl.getAttribute( 'data-level' ) >= this.level + 1 ) {
					classie.remove( levelEl, 'mp-level-open' );
					classie.remove( levelEl, 'mp-level-overlay' );
				}
				else if( Number( levelEl.getAttribute( 'data-level' ) ) == this.level ) {
					classie.remove( levelEl, 'mp-level-overlay' );
				}
			}
		}
	}

	// add to global namespace
	window.mlPushMenu = mlPushMenu;

} )( window );