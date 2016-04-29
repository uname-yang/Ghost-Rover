module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({
        copy: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**',
                    dest: ''
                }]
            },
            semantic: {
                files: [{
                    expand: true,
                    cwd: 'semantic/dist/',
                    src: '**',
                    dest: 'assets/'
                }]
            },
            jquery: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/jquery/dist/',
                    src: 'jquery.min.js',
                    dest: 'assets/'
                }]
            },
            awesome: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/font-awesome/fonts/',
                    src: '**',
                    dest: 'assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/font-awesome/css/',
                    src: '**',
                    dest: 'assets/css/'
                }]
            },
            icons: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: '*.eot',
                    dest: 'assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: 'octicons.woff',
                    dest: 'assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: '*.ttf',
                    dest: 'assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: 'octicons.css',
                    dest: 'assets/css/'
                }]
            }
        },
        clean: {
            files: ['assets/','partials/','*.hbs']
        }
    });

    grunt.registerTask('default', ['copy']);
};
