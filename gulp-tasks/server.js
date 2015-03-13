var gulp = require('gulp'),
    forever = require('forever-monitor');

gulp.task('node-server-watch', function() {
  var child = new (forever.Monitor)('server.js', {
    max: 1,  
    sourceDir: 'server/',
    env: {'NODE_ENV': 'development'},
    watch: true,
    watchDirectory: 'server/'
  });

  child.on('exit', function () {
    console.log('server/server.js has exited');
  });

  child.start();
});