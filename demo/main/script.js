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
		outerMargin: false,
		pushing: true,
		floating: true,
		draggable: {
			enabled: true
		},
		resizable: {
			enabled: false,
		},
		multiGridster: {
			enabled: true
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
			}],
			add: function(item) {
				self.items.push(item);
			},
			remove: function(item) {
				for (var i = 0; i < self.items.length; i++) {
					if (self.items[i] === item) {
						self.items.splice(i, 1);
						break;
					}
				}
			}
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
				col: 1
			}],
			add: function(item) {
				console.log(item);
				self.items.push(item);
			},
			remove: function(item) {
				for (var i = 0; i < self.items.length; i++) {
					if (self.items[i] === item) {
						self.items.splice(i, 1);
						break;
					}
				}
			}
		}
		return self;
	}();
});
