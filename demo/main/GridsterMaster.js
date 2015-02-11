'use strict';
/*global _:false*/

/**
 * Factory in the uasApp.
 * Keeps track of all the multi gridster.
 */
angular.module('app')
	.factory('GridsterMaster', function() {
		var gridsters = [];

		return {
			/**
			 * Registers a new item to be tracked by the factory.
			 * @param {Object} gridster A MulitGridster instance.
			 */
			register: function(gridster) {
				gridsters.push(gridster);
			},
			/**
			 * Unregisters an item to be tracked by the factory.
			 * @param {Object} gridster A MulitGridster instance.
			 */
			unregister: function(gridster) {
				_.remove(gridsters, gridster);
			},
			/**
			 * @param {Object} item An angular element.
			 * @return {Object} The closest gridster to the given item.
			 */
			findClosestGridster: function(item) {
				return _.min(gridsters, function(gridster) {
					return gridster.distanceToMe(item);
				});
			}
		};
	});
