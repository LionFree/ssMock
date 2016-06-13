(function () {
    'use strict';

    angular
        .module('ssMock')
        .factory('homeService', homeService);

    function homeService() {

        return {
            GetServers: getServerGroups
        };

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
                                            title: 'Pipeline Pilot'
                                        }
                                    ],
                                    status: 'Running',
                                    title: 'Pipeline Pilot'
                                },
                                {
                                    services: [
                                        {
                                            status: 'Not Installed',
                                            title: 'Foundation Hub'
                                        }
                                    ],
                                    status: 'Not Installed',
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
                                            status: 'Stopped',
                                            title: 'Vault Private Service'
                                        },
                                        {
                                            status: 'Running',
                                            title: 'Vault Workflow Service'
                                        }
                                    ],
                                    status: 'Partial',
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
    }
})();
