var gulp = require('gulp'),
    plumber = require('gulp-plumber');
    react = require('gulp-react'),
    jshint = require('gulp-jshint');

gulp.task('react', function() {
  return gulp.src('./client/static/app/**/*.jsx')
    .pipe(react())
    .pipe(jshint())
    .pipe(plumber())
    .pipe(jshint.reporter())
    .pipe(gulp.dest('./client/build/app'));
});