const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');


gulp.task('spritesmith', ()=>{
    gulp.src('./*.png')
        .pipe(spritesmith({
            imgName: 'indexicons.red.png',
            cssName: 'indexicons.red.sass',
            padding: 10,
            algorithm: 'binary-tree',
            cssTemplate: './handlebarsInheritance.sass.handlebars'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['spritesmith']);