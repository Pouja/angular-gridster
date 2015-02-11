'use strict';

/**
 * To be used in combination with gridstermaster.
 * Provides functionality to know which model is coupled and what the distance is to this element.
 */
angular.module('app')
	.directive('multiGridster', ['GridsterMaster', 'RectangleHelper',
		function(GridsterMaster, RectangleHelper) {
			return {
				link: function(scope, el, attr) {
					var api = {
						/**
						 * The model that is coupled with this directive
						 */
						dataModel: scope.$eval(attr.model),

						/**
						 * Calculates the distance from an element to this one.
						 * @return {Number} Number.MIN_VALUE when the element is inside this element otherwise an distance number.
						 */
						distanceToMe: function(other) {
							var elRect = el[0].getBoundingClientRect();
							var otherRect = other[0].getBoundingClientRect();
							//If the element isn't vissible return the max distance
							if (el[0].offsetParent === null) {
								return Number.MAX_VALUE;
							}

							var distance = RectangleHelper.distance(elRect, otherRect);
							return (distance === 0) ? Number.MIN_VALUE : distance;
						}
					};

					GridsterMaster.register(api);

					scope.$on('$destroy', function() {
						GridsterMaster.unregister(api);
					});
				}
			};
		}
	]);
