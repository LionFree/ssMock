(function () {
    angular
        .module('ssMock')
        .controller('homeController', ['$scope', 'homeService', 'statusAnnotationService', function ($scope, model, statusAnnotationService) {

          var servers = model.GetServers();

          servers.forEach(function(server) {

              statusAnnotationService.annotate(server);
              server.serviceGroups.forEach(function(group) {
                  statusAnnotationService.annotate(group);
                  group.services.forEach(function(service) {
                      statusAnnotationService.annotate(service);
                  });
              });
          });

          $scope.serverGroups = servers;
}])
})();