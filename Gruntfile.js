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
                    dest: 'build/'
                }]
            },
            semantic: {
                files: [{
                    expand: true,
                    cwd: 'semantic/dist/',
                    src: '**',
                    dest: 'build/assets/'
                }]
            },
            jquery: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/jquery/dist/',
                    src: 'jquery.min.js',
                    dest: 'build/assets/'
                }]
            },
            awesome: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/font-awesome/fonts/',
                    src: '**',
                    dest: 'build/assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/font-awesome/css/',
                    src: '**',
                    dest: 'build/assets/css/'
                }]
            },
            icons: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: '*.eot',
                    dest: 'build/assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: 'octicons.woff',
                    dest: 'build/assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: '*.ttf',
                    dest: 'build/assets/fonts/'
                }, {
                    expand: true,
                    cwd: 'node_modules/octicons/octicons/',
                    src: 'octicons.css',
                    dest: 'build/assets/css/'
                }]
            }
        },
        clean: {
            files: ['build/']
        }
    });

    grunt.registerTask('default', ['copy']);
};
