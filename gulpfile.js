var 
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested')
	cssimport = require('postcss-import')
;
gulp.task('default', function(){
	console.log('Hooray! A Gulp task!');
});

gulp.task('html', function(){
	console.log('Imagine something useful being done to your html...');
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport, cssvars, nested, autoprefixer ]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		console.log('index.html changed');
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*', function(){
		console.log('styles updated');
		gulp.start('styles');
	})
})