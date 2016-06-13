// Karma configuration
// Generated on Thu Jan 22 2015 17:37:50 GMT-0800 (PST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../..',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // files are specified in Gruntfile.js

            // nah, j/k, here they are:
            'app/assets/lib/angular-1.5.6/angular.js',
            'app/assets/lib/angular-1.5.6/angular-animate.js',
            'app/assets/lib/angular-ui/ui-bootstrap-1.3.3.js',
            'test/lib/angular/angular-mocks.js',

            'app/*.js',
            'app/home/*.js',

            'test/javascript/unit/specs/**/*.js'
        ],



        // list of files to exclude
        exclude: [
        ],

        ngHtml2JsPreprocessor: {
            cacheIdFromPath: function(filepath) {
                var cacheId = filepath;
                // remove path, so that cacheId is only the file name
                //cacheId = cacheId.substr(cacheId.lastIndexOf('/')+1);
                // match namespace used in directives
                cacheId = cacheId.replace(/(templates\/|app\/assets\/js)/g, '');
                // remove the "tpl" from the file name
                cacheId = cacheId.replace('tpl.html', 'html');
                return cacheId;
            },

            moduleName: 'inputTemplates'
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // generate js files from html templates
            '**/*.html': 'ng-html2js'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'test-results.xml'
        },

        coverageReporter: {
            subdir: function(browser){
                // normalization process to keep a consistent browser name across different
                // OS
                return browser.toLowerCase().split(/[ /-]/)[0];
            }
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
