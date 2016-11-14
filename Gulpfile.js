var gulp = require('gulp');
var sass 	= require('gulp-sass');
var prefix 	= require('gulp-autoprefixer');
var sourcemaps 	= require('gulp-sourcemaps');

gulp.task('styles', function() {
	gulp.src('sass/**/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(prefix('last 2 versions'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css/'))
});

gulp.task('default', ['styles'], function () {
	gulp.watch('sass/**/*.sass',['styles']);
});
