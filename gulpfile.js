// // gulpプラグインの読み込み
const gulp = require("gulp");
var pug = require("gulp-pug");

// // Sassをコンパイルするプラグインの読み込み
const gulpDartSass = require('gulp-dart-sass')
const sassGlob = require("gulp-sass-glob-use-forward");


// style.scssをタスクを作成する
gulp.task("sass", () => {
  
  return gulp.src("sass/style.scss") // Sassのコンパイルを実行
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(gulpDartSass())
      //     // cssフォルダー以下に保存
    .pipe(gulp.dest("css"));
    
});

gulp.task( 'pug', function() {
	return gulp
		.src([ './pug/**/*.pug', '!./pug/**/_*.pug' ])
		.pipe(pug({
			pretty: true
		}))
		.pipe( gulp.dest( './public' ) );
});