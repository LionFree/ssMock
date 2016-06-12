var app = angular.module('ssMock', ['ui.bootstrap','ngAnimate']);

app.controller('homeController', ['$scope', 'homeService' ,function ($scope, model) {

    var addStatusAnnotations = function (obj) {
      switch (obj.status) {
          case 'Stopped':
              obj.symbol = '\u2B24';
              obj.cssClass = 'status-stopped';
              break;
          case 'Running':
              obj.symbol = '\u2B24';
              obj.cssClass = 'status-running';
              break;
          case 'Partial':
              obj.symbol = '\u2B24';
              obj.cssClass = 'status-semi-valid';
              break;
          case 'Error':
          case 'Not Installed':
          default:
              obj.symbol = '\u26A0';
              obj.cssClass = 'status-invalid';
        }
        return obj;
    };

    var init = function () {

          var servers = model.GetServers();

          servers.forEach(function(server) {

              addStatusAnnotations(server);
              server.serviceGroups.forEach(function(group) {
                  addStatusAnnotations(group);
                  group.services.forEach(function(service) {
                      addStatusAnnotations(service);
                  });
              });
          });

          $scope.addAnnotations = addStatusAnnotations;
          $scope.serverGroups = servers;
    };

    init();
}]);