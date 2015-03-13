var gulp = require('gulp');

require('./gulp-tasks/server')
require('./gulp-tasks/hint');
require('./gulp-tasks/react');
require('./gulp-tasks/copy');
require('./gulp-tasks/sass')

//Usage
gulp.task('test', ['react', 'copy', 'jshint', 'sass']);
gulp.task('default', [
    'jshint',
    'copy',
    'sass',
    'react',
    'watch-copy',
    'watch-sass',
    'watch-react',
    'watch-hint-js',
    'node-server-watch'
]);
