// // gulpプラグインの読み込み
const gulp = require("gulp");

// // Sassをコンパイルするプラグインの読み込み
const gulpDartSass = require('gulp-dart-sass')
const sassGlob = require("gulp-sass-glob-use-forward");


// style.scssをタスクを作成する
gulp.task("default", () => {
  
  return gulp.src("sass/style.scss") // Sassのコンパイルを実行
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(gulpDartSass())
      //     // cssフォルダー以下に保存
    .pipe(gulp.dest("css"));
    
});