var gulp = require('gulp');
less = require('gulp-less');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var lr = require('tiny-lr');
var server = lr();

gulp.task('less', function() {
  gulp.src('stylesheets/bootstrapp.less')
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest('stylesheets'))
    .pipe(livereload(server));
});

gulp.task('jw', function(){
    var spawn = require('child_process').spawn,
        j     = spawn('jekyll', ['serve','-w']);

    j.stdout.on('data', function (data) {
        console.log('stdout: ' + data); // works fine
    });

    watch({glob: '/glob/path/to/jekyll/output'}, function(files) {
        // update files in batch mode
        return files.pipe(refresh(server));
    });
    server.listen(4000, function (err) {
        if (err) return console.log(err);
        gulp.watch('_site/**', ['less']);
    });
});