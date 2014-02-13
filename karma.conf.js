module.exports = function(config){
    config.set({
    basePath : './',

    files : [
      'bower_components/jquery/jquery.js',
      'bower_components/underscore/underscore.js',
      'build/jsIoDia.js',
      'test/helpers/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [],

    autoWatch : false,

    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-spec-reporter'
            ]
})}
