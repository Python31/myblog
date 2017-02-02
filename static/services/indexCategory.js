(function(angular){
    var indexCategory = angular.module("myBlog.services.indexCategory",[]);
    indexCategory.service("indexCategoryService",["$http","AppConfig",function($http,AppConfig){

        this.getCategory = function(cb){
            $http({
                method:"get",
                url:"/admin/category/indexGet?start=0&count="+AppConfig.indexCategorySize
            }).then(function successCallback(categorys){
                cb(categorys.data);
            },function errorCallback(err){
                console.error("error:"+err);
            });
        };
        this.getAllCategory = function(cb){
            $http({
                method:"get",
                url:"/admin/category/indexGet"
            }).then(function successCallback(categorys){
                cb(categorys.data);
            },function errorCallback(err){
                console.error("error:"+err);
            });
        }
    }]);
})(angular);