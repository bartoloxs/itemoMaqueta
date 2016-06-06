'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
    watch = require('gulp-watch');
 
gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});