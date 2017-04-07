const gulp = require('gulp');
const mocha = require('gulp-mocha');
 
gulp.task('test', () => {
  gulp.src('**/*spec.js', {read: false}).pipe(mocha({reporter: 'nyan'}))
});