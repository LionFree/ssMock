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
                  server.group.forEach(function(serviceGroup) {
                      statusAnnotationService.annotate(serviceGroup);
                      serviceGroup.services.forEach(function(service) {
                          statusAnnotationService.annotate(service);
                      });
                  });
              });

            vm.servers = servers;
            return vm;
        }
})();