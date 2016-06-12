// main.js
/// <reference path="assets/lib/angular-ui/ui-bootstrap-tpls-1.3.3.js" />
require.config({
    baseUrl: "",

    // alias libraries paths
    paths: {
        'application-configuration': 'assets/js/application-configuration',
        'angular': 'assets/lib/angular-1.5.6/angular',
        'angular-route': 'assets/lib/angular-1.5.6/angular-route',
        'angularAMD': 'assets/lib/angular-amd-0.2/angularAMD.min',
        'ui-bootstrap' : 'assets/lib/angular-ui/ui-bootstrap-1.3.3',
        'homeService': 'home/homeService'
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'ui-bootstrap': ['angular']
    },
    // kick start application
    deps: ['application-configuration']
});