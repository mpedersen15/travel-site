var 
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create()
;

gulp.task('watch', function(){
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});
	
	watch('./app/index.html', function(){
		console.log('index.html changed');
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*', function(){
		console.log('styles updated');
		gulp.start('cssInject');
	});
	
	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});