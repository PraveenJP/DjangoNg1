app.factory('webservice',function($http){
   var obj = {};
   
   obj.countryData = function(){
       return $http.get('ngapp/data/countries.json');
   }
   
   obj.getProducts = function(){
       return $http.get('ngapp/data/products.json');
   }
   
   obj.getContent = function(){
       return $http.get('ngapp/data/content.json');
   }
   
   return obj;
   
});