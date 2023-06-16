const {src,dest,series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require("gulp-uglify");
/*
gulp basic functions 
gulp.task - defines task
gulp.file - point to file which we are using 
gulp.dest - points to destination folder
gulp.watch - watch files and folders for changes made
*/
// gulp.task('check',async function(){
//     return console.log('working fine...');
// });
// checking the compiler using log
async function check(){
    return console.log('working fine...');
}
// Compiling sass 
function scssTask() {
    return src('app/scss/body.scss', { sourcemaps: true })
      .pipe(sass())
      .pipe(dest('dist', { sourcemaps: '.' }));
  }
// copy html to dist
function copyHtml(){
    return src('Index.html')
    .pipe(dest('dist'));
}
// optimised js
function optimisedJs(){
    return src('app/js/script.js')
    .pipe(uglify())
    .pipe(dest('dist'));
}
exports.default = series(check, scssTask,copyHtml,optimisedJs);