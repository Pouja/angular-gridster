'use strict';

/**
 * This directive is to be used in combination with gridstermast and multigridster.
 * Provides a callback when the element is closes to another gridster.
 */
angular.module('app')
	.directive('floatingGridsterItem', ['GridsterMaster', function(GridsterMaster) {
		return {
			scope: {
				onNewGrid: '&'
			},
			link: function(scope, el, attrs) {
				var dataModel = scope.$eval(attrs.model);
				var currentGrid = GridsterMaster.findClosestGridster(el);

				//Only check if the element is closer to another when the element has stopped moving.
				el.on('mouseup', function() {
					var newGrid = GridsterMaster.findClosestGridster(el);
					if (newGrid !== currentGrid) {
						scope.onNewGrid({
							parentModel: newGrid.dataModel,
							dataModel: dataModel
						});
					}
				});

			}
		};
	}]);
