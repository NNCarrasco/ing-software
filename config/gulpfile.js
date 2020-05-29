var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('../css/**/*.less')  
        .pipe(less())
        .pipe(gulp.dest('../css/'))
});
gulp.task('less2', function() {
    return gulp.src('../test/**/*.less')  
        .pipe(less())
        .pipe(gulp.dest('../test/'))
});
gulp.task('watch', function() {
    gulp.watch('../css/**/*.less', gulp.series('less'));
    gulp.watch('../test/**/*.less', gulp.series('less2'));
});

gulp.task('default', gulp.series('watch')); 