var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет
     autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автомат

    gulp.task('sass-ui', function(){ // Создаем таск Sass
    return gulp.src('src_ui/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
         .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src_ui/css-ui')) // Выгружаем результата в папку src_ui/css
        
});
    