var app = angular.module('ssMock', ['ui.bootstrap','ngAnimate']);

app.service('homeService', [function () {
    
  "use strict";

  function getServerGroups() {
    return [
      {
        status: 'Partial',
        title: 'COEURL',
        serviceGroups: [
          {
            services: [
              {
                status: 'Running',
                serviceName: 'Pipeline Pilot'
              }
            ],
            status: 'Running',
            title: 'Pipeline Pilot'
          },
          {
            services: [
              {
                status: 'Not Installed',
                serviceName: 'Foundation Hub'
              }
            ],
            status: 'Not Installed',
            title: 'Foundation Hub'
          },
          {
            services: [
              {
                status: 'Running',
                serviceName: 'Vault Message Processor'
              },
              {
                status: 'Running',
                serviceName: 'IIS'
              },
              {
                status: 'Stopped',
                serviceName: 'Vault Private Service'
              },
              {
                status: 'Running',
                serviceName: 'Vault Workflow Service'
              }
            ],
            status: 'Partial',
            title: 'Workbook'
          },
          {
            services: [
              {
                status: 'Running',
                serviceName: 'Compose'
              }
            ],
            status: 'Running',
            title: 'Compose / Capture / Design'
          }
        ]
      },
      {
        status: 'Running',
        title: 'HEART',
        serviceGroups: [
          {
            services: [
              {
                status: 'Running',
                title: 'Pipeline Pilot'
              }
            ],
            status: 'Running',
            title: 'Pipeline Pilot'
          },
          {
            services: [
              {
                status: 'Running',
                title: 'Foundation Hub'
              }
            ],
            status: 'Running',
            title: 'Foundation Hub'
          },
          {
            services: [
              {
                status: 'Running',
                title: 'Vault Message Processor'
              },
              {
                status: 'Running',
                title: 'IIS'
              },
              {
                status: 'Running',
                title: 'Vault Private Service'
              },
              {
                status: 'Running',
                title: 'Vault Workflow Service'
              }
            ],
            status: 'Running',
            title: 'Workbook'
          },
          {
            services: [
              {
                status: 'Running',
                title: 'Compose'
              }
            ],
            status: 'Running',
            title: 'Compose / Capture / Design'
          }
        ]
      }
    ];
  }

  return {
    GetServers: getServerGroups
  }
}]);
