var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var browserSync = require('browser-sync').create();
var babelify = require('babelify');

// Tasks

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});


gulp.task('concatInterface', function() {
  return gulp.src(['./js/calculator-interface.js', './js/life-expectancy-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({entries:['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
  .pipe(concat('vendor.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function() {
  return gulp.src(lib.ext('css').files)
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('clean', function() {
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function() {
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function() {
  browserSync.reload();
});

gulp.task('build', function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
