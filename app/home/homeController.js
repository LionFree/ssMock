(function () {
    'use strict';

    angular
        .module('ssMock')
        .controller('HomeController', ['homeService', 'statusAnnotationService', HomeController]);

    function HomeController(model, statusAnnotationService) {
            var vm = {};
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

            vm.serverGroups = servers;
            return vm;
        }
})();