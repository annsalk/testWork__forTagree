var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    includer = require("gulp-x-includer");
    plumber = require('gulp-plumber');

gulp.task('less', function(){
    return gulp.src('app/less/**/*.less')
         .pipe(plumber())
         .pipe(less({outputStyle: 'compressed'}))
         .pipe(rename({suffix: '.min'}))
         .pipe(autoprefixer({
            overrideBrowserslist:['last 8 versions']
         }))
         .pipe(gulp.dest('app/css'))
         .pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
        'node_modules/animate.css/animate.css',
        'node_modules/swiper/swiper-bundle.min.css'
    ])
       .pipe(concat('libs.min.css'))
       .pipe(cssmin())
       .pipe(gulp.dest('app/css'))

});
gulp.task('script', function(){
    return gulp.src([
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
        'node_modules/swiper/swiper-bundle.min.js',
        'node_modules/wow.js/dist/wow.js'
    ])
       .pipe(concat('libs.min.js'))
       .pipe(plumber())
       .pipe(uglify())
       .pipe(gulp.dest('app/js'))

});

gulp.task('html', function(){
    return gulp.src('app/html/*.html')
      .pipe(browserSync.reload({stream: true}))

});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
      .pipe(browserSync.reload({stream: true}))

});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});


gulp.task('watch', function(){
    gulp.watch('app/less/**/*.less', gulp.parallel('less'));
    gulp.watch('app/html/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));

});

gulp.task('default', gulp.parallel('style', 'script', 'less', 'watch', 'browser-sync'));