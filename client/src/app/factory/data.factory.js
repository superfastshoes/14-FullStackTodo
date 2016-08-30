(function(){
	'use strict'

	angular
		.module('app')
		.factory('todoFactory', todoFactory);

	todoFactory.$inject = ['$http', '$q', 'apiUrl'];

	function todoFactory($http, $q, apiUrl){
		var service ={
			add: add,
			getAll: getAll,
			getById: getById,
			update: update,
			remove: remove
		};
		return service;

/****************************************************************************************/

		function add(task) {
			var defer = $q.defer()

			$http.post(apiUrl + '/Todoes', task)
				 .then(
				 	function(resonse){
				 		defer.resolve(resonse.data);
				 	},
				 	function(error){
				 		defer.reject(error);
				 	}
				 );
		return defer.promise;		 
		}	

/****************************************************************************************/

		function getAll() {
      		var defer = $q.defer();

      		$http.get(apiUrl + '/Todoes')
        	  .then(
          		function(response) {
                defer.resolve(response.data);
            },
          		function(error) {
                 defer.reject(error);
         	 }
        );
      return defer.promise;
    }

/****************************************************************************************/

		function getById(id) {
      var defer = $q.defer();

      $http.get(apiUrl + '/Todoes/' + id)
        .then(
          function(response) {
            defer.resolve(response.data);
          },
          function(error) {
            defer.reject(error);
          }
        );
      return defer.promise;
    }

/****************************************************************************************/

		function update(todo) {
			var defer = $q.defer();

			$http.put(apiUrl + "/Todoes/" + todo.todoId, todo)
				.then(
					function(){
						defer.resolve();
					},
					function(error){
						defer.reject(error);
					}
				);
			return defer.promise;
		}

/****************************************************************************************/

		function remove(todo) {
			var defer = $q.defer();

			$http.delete(apiUrl + '/Todoes/' + todo.todoId)
				.then(
					function(response){
						defer.resolve(response.data);
					},
					function(error){
						defer.reject(error);
					}
				);
			return defer.promise;
		}
	}
})();