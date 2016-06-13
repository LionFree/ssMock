(function () {
    angular.module('ssMock')
        .controller('homeController', ['$scope', 'homeService', 'statusAnnotationService', function ($scope, model, annotationService) {

    var annotateStatus = function (obj) {
        return annotationService(obj);
    };

    var init = function () {

          var servers = model.GetServers();

          servers.forEach(function(server) {

              annotateStatus(server);
              server.serviceGroups.forEach(function(group) {
                  annotateStatus(group);
                  group.services.forEach(function(service) {
                      annotateStatus(service);
                  });
              });
          });

          $scope.serverGroups = servers;
    };

    init();
}])
})();