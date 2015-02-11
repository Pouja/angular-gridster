'use strict';

angular.module('app')
	.factory('RectangleHelper', function() {
		return {
			/**
			 * Return true iff the innerRect is inside the outerRect.
			 */
			hasInner: function(outerRect, innerRect) {
				var outTopLeft = {
					x: outerRect.left,
					y: outerRect.top
				};
				var outBottomRight = {
					x: outerRect.right,
					y: outerRect.bottom
				};
				var innerTopLeft = {
					x: innerRect.left,
					y: innerRect.top
				};
				var innerBottomRight = {
					x: innerRect.right,
					y: innerRect.bottom
				};
				return ((outTopLeft.x <= innerTopLeft.x && outBottomRight.x >= innerBottomRight.x) &&
					(outTopLeft.y <= innerTopLeft.y && outBottomRight.y >= innerBottomRight.y));
			},
			/**
			 Return 0 if yRect is in xRect otherwise the distance from the xRect to the yRect
			 */
			distance: function(thisRect, otherRect) {
				if (this.hasInner(thisRect, otherRect)) {
					return 0;
				}
				var thisCoord = {
					x: (thisRect.left + thisRect.right) / 2,
					y: (thisRect.top + thisRect.bottom) / 2
				};
				var otherCoord = {
					x: (otherRect.left + otherRect.right) / 2,
					y: (otherRect.top + otherRect.bottom) / 2
				};
				return Math.sqrt(Math.pow(thisCoord.x - otherCoord.x, 2) + Math.pow(thisCoord.y - otherCoord.y, 2));
			}
		};
	});
