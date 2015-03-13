var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./client/static/assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(plumber())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/build/assets/css'));
});

gulp.task('watch-sass', function() {
    gulp.watch(['./client/static/assets/scss/*.scss'], ['sass']);
});
