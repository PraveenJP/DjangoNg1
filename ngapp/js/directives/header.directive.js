app.directive("header", function() {
  return {
    restrict: 'A',
    templateUrl: 'ngapp/templates/header.html',
    scope: true,
    transclude : false    
  };
});