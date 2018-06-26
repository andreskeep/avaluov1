
//CODIGO PARA PUG

const gulp = require('gulp'),

	pug = require('gulp-pug');
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();
	require

gulp.task('pug', () =>
	gulp.src('./pug/*.pug')
	.pipe(pug({

		pretty: true

	}))

	.pipe(gulp.dest('./'))
);

gulp.task('sass', ()=>
	gulp.src('./sass/*.sass')
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(autoprefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(gulp.dest('./assets/css'))
);

gulp.task('es6', ()=>
	gulp.src('./es6/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./assets/js'))
);

gulp.task('default', () => {

	gulp.watch('./pug/*.pug', ['pug']);
	gulp.watch('./sass/*.sass', ['sass']);
	gulp.watch('./es6/*.js', ['es6']);

	browserSync.init({
		server: './'
	});

	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./assets/css/*.css').on('change', browserSync.reload);
	gulp.watch('./assets/js/*.js').on('change', browserSync.reload);

});


