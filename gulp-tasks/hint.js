var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber');

var hintPath = [
    './client/static/app/**/*.js',
    './server/**/*.js',
    '!./node_modules/**/*',
    '!./client/coverage/**/*',
    '!./client/static/bower_components/**/*'
];

gulp.task('jshint', function() {
    return gulp.src(hintPath)
    .pipe(jshint())
    .pipe(plumber())
    .pipe(jshint.reporter());
});

gulp.task('watch-hint-js', function() {
    gulp.watch(hintPath, ['jshint']);
});