angular.module('app')

.directive('integer', function() {
	return {
		require: 'ngModel',
		link: function(scope, ele, attr, ctrl) {
			ctrl.$parsers.unshift(function(viewValue) {
				if (viewValue === '' || viewValue === null || typeof viewValue === 'undefined') {
					return null;
				}
				return parseInt(viewValue, 10);
			});
		}
	};
})

.controller('MainCtrl', function($scope) {

	$scope.gridsterOpts = {
		margins: [20, 20],
		outerMargin: false,
		pushing: true,
		floating: true,
		draggable: {
			enabled: false
		},
		resizable: {
			enabled: false,
			handles: ['n', 'e', 's', 'w', 'se', 'sw']
		}
	};

	// these map directly to gridsterItem options
	$scope.standardItems = [{
		sizeX: 2,
		sizeY: 1,
		row: 0,
		col: 0
	}, {
		sizeX: 2,
		sizeY: 2,
		row: 0,
		col: 2
	}, {
		sizeX: 2,
		sizeY: 1,
		row: 2,
		col: 1
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 2,
		col: 3
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 2,
		col: 4
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 0,
		col: 4
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 0,
		col: 5
	}, {
		sizeX: 2,
		sizeY: 1,
		row: 1,
		col: 0
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 1,
		col: 4
	}, {
		sizeX: 1,
		sizeY: 2,
		row: 1,
		col: 5
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 2,
		col: 0
	}];

	// these are non-standard, so they require mapping options
	$scope.customItems = [{
		size: {
			x: 2,
			y: 1
		},
		position: [0, 0]
	}, {
		size: {
			x: 2,
			y: 2
		},
		position: [0, 2]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [1, 4]
	}, {
		size: {
			x: 1,
			y: 2
		},
		position: [1, 5]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 0]
	}, {
		size: {
			x: 2,
			y: 1
		},
		position: [2, 1]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 3]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [0, 4]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [0, 5]
	}, {
		size: {
			x: 2,
			y: 1
		},
		position: [1, 0]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 4]
	}];

	$scope.emptyItems = [{
		name: 'Item1'
	}, {
		name: 'Item2'
	}, {
		name: 'Item3'
	}, {
		name: 'Item4'
	}];

	// map the gridsterItem to the custom item structure
	$scope.customItemMap = {
		sizeX: 'item.size.x',
		sizeY: 'item.size.y',
		row: 'item.position[0]',
		col: 'item.position[1]',
	};

	$scope.multiGridsterOpts = {
		margins: [10, 10],
		columns: 5,
		outerMargin: false,
		pushing: true,
		floating: true,
		draggable: {
			enabled: true
		},
		resizable: {
			enabled: false
		},
		multiGridster: {
			// When removing the original, it will place the new on at the original place of the original.
			// That is why the position argument is given, it also contains the sizeX and sizeY.
			add: function(item, group, position) {
				item = angular.copy(item);
				item.row = position.row;
				item.col = position.col;
				group.items.push(item);
			},
			enabled: true,
			remove: function(item, group) {
				for (var i = 0; i < group.items.length; i++) {
					if (group.items[i] === item) {
						group.items.splice(i, 1);
						break;
					}
				}
			}
		}
	};

	$scope.multiItems1 = function() {
		var self = {
			items: [{
				id: 1,
				sizeX: 1,
				sizeY: 1,
				row: 0,
				col: 0
			}, {
				id: 2,
				sizeX: 1,
				sizeY: 1,
				row: 1,
				col: 2
			}, {
				id: 3,
				sizeX: 1,
				sizeY: 1,
				row: 1,
				col: 1
			}]
		}
		return self;
	}();

	$scope.multiItems2 = function() {
		var self = {
			items: [{
				id: 4,
				sizeX: 1,
				sizeY: 1,
				row: 0,
				col: 0
			}, {
				id: 5,
				sizeX: 1,
				sizeY: 1,
				row: 1,
				col: 2
			}, {
				id: 6,
				sizeX: 1,
				sizeY: 1,
				row: 1,
				col: 11
			}]
		}
		return self;
	}();
});
