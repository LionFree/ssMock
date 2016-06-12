// To run tests from command line use "grunt karma:dev". For check-in use "grunt karma:ci".
// To run jshint, from command line use "grunt jshint".

var Chain = require('sprockets-chain');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            options: {
                configFile: 'test/javascript/unit/karma.conf.js'
            }
            ,

            ci: {
                options: {
                    // in CI build, get source files from asset pipeline directive (the true argument in getKarmaFiles)
                    // this catches missing files and incorrect order of includes
                    files: getKarmaFiles(true)
                },
                singleRun: true,
                browsers: ['Chrome'],
                preprocessors: {
                    '**/*.html': 'ng-html2js',
                    'app/assets/javascripts/**/!(*Module).js': 'coverage'
                }
            },

            dev: {
                options: {
                    // include source files using /**/*.js, so that in dev mode adding a new file does not require reloading the karma runner
                    files: getKarmaFiles(false)
                },
                singleRun: false,
                browsers: ['IE'],
                reporters: ['dots']
                // ng-html2js preprocessor is default (set in karma.conf.js), so no need to add here
            },

            single: {
                options: {
                    //true to find all the errors and bugs, false to only find some of them.
                    files: getKarmaFiles(true)
                },
                singleRun: true,
                browsers: ['Chrome'],
                preprocessors: {
                    '**/*.html': 'ng-html2js',
                    'grails-app/assets/javascripts/**/!(*Module).js': 'coverage'
                },
                reporters: ['dots', 'coverage']
            }
        },

        "ddescribe-iit": {
            files: [
                'test/javascript/unit/specs/**/*.js'
            ]
        },


        jshint: {
            options: {
                jshintrc: 'jshintrc.json'
            },

            source: [
                'app/assets/js/**/*.js'
            ]
        },

        ngdocs: {
            all: [
                'app/assets/js/**/*.js',
            ]
        },

        todo: {
            options: {},
            src: [
                'grails-app/assets/javascripts/**/*.js',
                'test/javascript/unit/specs/**/*.js'
            ],
        },

        watch: {
            files: [
                'app/assets/js/**/*.js',
                'app/assets/js/**/*.html',
                'test/javascript/unit/specs/**/*.js'
            ],
            tasks:['test'],
            options:{
                atBegin:true
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ddescribe-iit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-todo');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('test:ci', 'Run test in CI system.', ['ddescribe-iit', 'jshint', 'karma:ci']);
    grunt.registerTask('test', 'run locally before commit', ['ddescribe-iit', 'jshint', 'karma:single']);

    function getKarmaFiles(useDirectives) {
        var files = [];
        files.push(
            'app/assets/lib/angular-1.5.6/angular.js',
            'app/assets/lib/angular-1.5.6/angular-mocks.js',
            'app/assets/lib/angular-1.5.6/angular-animate.js',
            'app/assets/lib/angular-1.5.6/angular-route.js'
        );

        if (useDirectives) {
            // use sprockets chain to add files based on the asset pipeline directives
            var sc = new Chain();
            // sc.appendPath('test/javascript/unit/stubs');
            sc.appendPath('app/home');
            files = files.concat(sc.depChain('homeService.js').slice(0, -1));  // the slice is there to remove the last element, which is homeService.js itself
            files = files.concat(sc.depChain('homeController.js').slice(0, -1));  // the slice is there to remove the last element, which is homeController.js itself
        }
        else {
            files.push(
                // 'app/assets/js/**/*Module.js',
                // 'app/assets/js/**/*.js',
                // 'app/assets/js/**/templates/*.html'
            );
        }

        // add specs
        files.push(
            'test/javascript/unit/stubs/shared/**/*.js',
            'test/javascript/unit/specs/**/*.js'
        );
        return files;
    }
};