var gulp = require('gulp'),
    clean = require('gulp-clean');

var path = './client/static/**/*.{js,css,ttf,svg,eot,woff,woff2,otf,png}';

gulp.task('copy', function() {
  return gulp.src(path)
  .pipe(gulp.dest('./client/build'));
});

gulp.task('clean', function() {
  return gulp.src('./client/build', {read: false})
    .pipe(clean());
});

gulp.task('watch-copy', function() {
  return gulp.watch(path, ['copy']);
});

