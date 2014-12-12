angular.module('sailplay.services', [])

    .service('GetData', function($http, $q) {
        this.get = function(url,param){  //------------------------------------------get--------------------
            var deferred = $q.defer();
            var transform = function(data){
                return $.param(data);
            }
            $http.get(url,{params: param} ).success(function(data, status) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });

            return deferred.promise;
        }
        this.post = function(url,param){//-------------------------------------------post------------------------
            var deferred = $q.defer();
            var transform = function(data){
                return $.param(data);
            }
            $http.post(url,param,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: transform
            }).success(function(data, status) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });

            return deferred.promise;
        }

    })

