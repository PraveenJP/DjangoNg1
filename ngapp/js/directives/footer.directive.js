app.directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'ngapp/templates/footer.html',
    scope: true,
    transclude : false    
  };
});