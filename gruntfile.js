
module.exports = function (grunt) {


    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.loadNpmTasks("grunt-contrib-connect");


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%=pkg.name %> - version <%= pkg.version %> - ' +
        '<%= grunt.template.today("dd-mm-yyyy") %>\n' +
        '<%= pkg.description %>\n ' +
        '&#169 <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
        connect: {
            server: {
                options: {
                    port: 46578,
                    keepalive: true
                }
            }
        }
    });



    // // Default task.
    // grunt.registerTask('default', ['less', 'makeHTML', 'makeDeferred', 'replace:config']);

    // grunt.registerTask('develop', ['clean:develop', 'less', 'makeHTML:develop', 'makeDeferred:developLight', 'makeDeferred:developDark', 'usebanner', 'copy:develop']);

    // grunt.registerTask('develop-deploy', ['bump', 'clean:develop', 'less', 'makeHTML:develop', 'makeDeferred:developLight', 'makeDeferred:developDark', 'usebanner', 'copy:develop']);

    // grunt.registerTask('production', ['less', 'uglify', 'cssmin', 'makeHTML:production', 'makeDeferred:productionLight', 'makeDeferred:productionDark', 'usebanner', 'compress', 'copy:production']);

};