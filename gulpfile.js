var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Compile sass
gulp.task('sass', function () {
  gulp.src('components/stylesheet/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Uglify Javascripts
gulp.task('compress', function() {
  return gulp.src('components/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Watching files
gulp.task('watch', function() {
	browserSync.init({
    server: './',
    browser: "google chrome"
  });

  gulp.watch("components/scripts/*.js", ['compress']);
  gulp.watch("components/stylesheet/**/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// Uglify Plugins
gulp.task('uglifyPlugins', function() {
  return gulp.src(['components/libs/jquery/dist/jquery.js', 'components/libs/jasny-bootstrap/dist/js/jasny-bootstrap.js', 'components/libs/bootstrap-sass/assets/javascripts/bootstrap.js', 'components/libs/smartmenus-1.0.1/jquery.smartmenus.min.js', 'components/libs/smartmenus-1.0.1/addons/bootstrap/jquery.smartmenus.bootstrap.min.js' ])
/*    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))*/
    .pipe(uglify())
    .pipe(concat('plugin-min.js'))
    .pipe(gulp.dest('js'));
});

// Minify Plugins CSS files
gulp.task('minifyPlugins', function() {
  return gulp.src(['components/libs/jasny-bootstrap/dist/css/jasny-bootstrap.css', 'components/libs/smartmenus-1.0.1/addons/bootstrap/jquery.smartmenus.bootstrap.css'])
/*    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
*/
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('plugin-min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('icons', function() { 
    return gulp.src('components/libs/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('fonts')); 
});

gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);
gulp.task('default', ['watch']);
