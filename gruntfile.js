module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    yslow: {
      options: {
        thresholds: {
          weight: 180,
          speed: 3000,
          score: 80,
          requests: 15
        }
      },
      pages: {
        files: [
        {
          src: 'http://www.mathenjeans.fr/',
        }
        ]
      }
    },

    pagespeed: {
     options: {
       nokey: true,
       url: "http://www.mathenjeans.fr/",
     }
   },

    imageoptim: {
      myTask: {
        src: ['images','img']
      }
    },

    phantomas: {
      gruntSite : {
        options : {
          indexPath : './phantomas/',
          options   : {},
          url       : 'http://www.mathenjeans.fr/'
        }
      }
    },

    jekyll: {
      server : {
        dest: '_site',
        server : true,
        server_port : 4000,
        auto : true
      }
    },

    browserSync: {
      files: {
        src : ['_site/stylesheets/*.css']
      },
      options: {
        watchTask: true,
        ghostMode: {
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        },
        server: {
          baseDir: '_site'
        }
      },
    },

    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: '_site'
        }
      }
    },
    pagespeed: {
     options: {
       nokey: true,
       url: "http://www.mathenjeans.fr/",
       strategy: "mobile"
     }
   },

   watch: {
    livereload: {
      files: [
      '_config.yml',
      'index.html',
      '_layouts/**',
      '_posts/**',
      '_includes/**',
      'stylesheets/*.css',
      ],
      tasks: ['shell:jekyllBuild'],
      options: {
        livereload: true
      },
    },
  }
});

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-yslow');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-phantomas');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-pagespeed');

  // Default task(s).
  grunt.registerTask('perf', ['phantomas','yslow','pagespeed']);
  grunt.registerTask('optim', ['imageoptim','uncss']);
  grunt.registerTask('build', ['jekyll']);  
  grunt.registerTask('default', ['shell', 'connect', 'browserSync','watch']);

};
