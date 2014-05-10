var gulp = require('gulp');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var gulpif = require('gulp-if');

gulp.task('testif', function() {
  return gulp.src('app/*.html')
    .pipe(usemin({
      css: [gulpif(true, minifyCss())]
      //css: [minifyCss()]
    }))
    .pipe(gulp.dest("build"));
});

// Default
gulp.task('default', ['testif']);
