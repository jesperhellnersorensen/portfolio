//Gulp standalone
var gulp         = require('gulp');
//Plugins 
var browserSync  = require('browser-sync'); 
var reload       = browserSync.reload;  
var sass         = require('gulp-sass'); 
var plumber      = require('gulp-plumber'); 

//Javascript task - Plumber, .min, uglify 
gulp.task('scripts', function(){
  gulp.src(['public/js/**/*.js'])
    .pipe(plumber())
    .pipe(gulp.dest('public/js/'))
      .pipe(reload({stream:true}));
});

gulp.task('styles', function(){
  gulp.src('public/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(reload({stream:true})); 
});

//HTML Task - Browsersync 
gulp.task('html', function(){
  gulp.src('public/**/*.html')
  .pipe(reload({stream:true})); 
}); 

//Browser-Sync Task
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./public/"
    }
  });
});

//Watch task - Holder øje med ændringer i de angivede filer - outputter det i commandwindow
gulp.task('watch', function(){
  gulp.watch('public/js/**/*.js', ['scripts']); 
  gulp.watch('public/scss/**/*.scss', ['styles']); 
  gulp.watch('public/**/*.html', ['html']); 

}); 

//Gulp task - Indtast "gulp" i commandwindow(roden af mappen) - kører overstående scripts
gulp.task('default', ['scripts', 'styles', 'html', 'browser-sync', 'watch']); 