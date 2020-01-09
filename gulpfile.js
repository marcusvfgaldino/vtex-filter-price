'use strict';

const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('compress', async function() {
    gulp.src(['*.js', '*.mjs', '!gulpfile.js'])
      .pipe(minify())
      .pipe(gulp.dest('dist'))
});