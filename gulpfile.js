/*
gulpfile.
*/

var gulp         = require('gulp');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');

gulp.task('css', function() {
  return gulp.src('project/resources/sass/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('project'));
});

gulp.task('watch', function() {
  gulp.watch('project/resources/sass/*.scss', ['css']);
});


gulp.task('default', ['css', 'watch']);
