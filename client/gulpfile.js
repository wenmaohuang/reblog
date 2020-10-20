


const gulp = require('gulp');
var inject = require('gulp-inject');

function handleHTML() {
  return gulp.src('public/index.html')
    // 将指定的独立文件中的内容全部插入到HTML文件中指定的位置
    // 可以先利用相关插件将css、js文件处理（丑化压缩、自动前缀等）
    .pipe(inject(gulp.src(['src/*.css', 'src/*.jsx']), {
      starttag: '<div id="root"></div>', // '<!-- -->'这是关键，判断插入位置
      endtag: '</body>',
      relative: true,
      transform: function (filePath, file) {
        if (filePath.slice(-7) === 'App.jsx') {
          console.log(filePath.split('/').pop().slice(0,-1));


          return `<script src="/${filePath.split('/').pop().slice(0,-1)}"></script>`
        }
        if (filePath.slice(-4) === '.css') {
          return '<style href="/"></style>'
        }
        // 将文件内容作为字符串返回
        return file.contents.toString('utf8')
      }
    }))

    .pipe(gulp.dest('dist/'));

}

var react = require('gulp-react');

var babel = require('gulp-babel');


function handleJSX(){
  return gulp.src('src/App.jsx')
  // .pipe(react({
  //   es6module: true
  // }))
 .pipe(babel(
  {
    "presets": [
        ["@babel/preset-env",
        {
          "targets": {
                "esmodules": true
            }
        }
            
        ]
    ]
}
 ))
  .pipe(gulp.dest('dist'));
}


gulp.task('default', gulp.series(handleHTML,handleJSX))















// 'use strict';

// var gulp = require('gulp');
// var del = require('del');



// // Load plugins
// var $ = require('gulp-load-plugins')();
// var browserify = require('browserify');
// var watchify = require('watchify');
// var source = require('vinyl-source-stream'),

//     sourceFile = './app/scripts/app.js',

//     destFolder = './dist/scripts',
//     destFileName = 'app.js';

// var browserSync = require('browser-sync');
// var reload = browserSync.reload;

// // Styles
// gulp.task('styles', ['sass', 'moveCss']);

// gulp.task('moveCss',['clean'], function(){
//   // the base option sets the relative root for the set of files,
//   // preserving the folder structure
//   gulp.src(['./app/styles/**/*.css'], { base: './app/styles/' })
//   .pipe(gulp.dest('dist/styles'));
// });

// gulp.task('sass', function() {
//     return $.rubySass('./app/styles', {
//             style: 'expanded',
//             precision: 10
//         })
//         .pipe($.autoprefixer('last 1 version'))
//         .pipe(gulp.dest('dist/styles'))
//         .pipe($.size());
// });



// var bundler = watchify(browserify({
//     entries: [sourceFile],
//     debug: true,
//     insertGlobals: true,
//     cache: {},
//     packageCache: {},
//     fullPaths: true
// }));

// bundler.on('update', rebundle);
// // bundler.on('log', $.utils.log);

// function rebundle() {
//     return bundler.bundle()
//         // log errors if they happen
//         .on('error', $.utils.log.bind($.utils, 'Browserify Error'))
//         .pipe(source(destFileName))
//         .pipe(gulp.dest(destFolder))
//         .on('end', function() {
//             reload();
//         });
// }

// // Scripts
// gulp.task('scripts', rebundle);

// gulp.task('buildScripts', function() {
//     return browserify(sourceFile)
//         .bundle()
//         .pipe(source(destFileName))
//         .pipe(gulp.dest('dist/scripts'));
// });




// // HTML
// gulp.task('html', function() {
//     return gulp.src('app/*.html')
//         .pipe($.useref())
//         .pipe(gulp.dest('dist'))
//         .pipe($.size());
// });

// // Images
// gulp.task('images', function() {
//     return gulp.src('app/images/**/*')
//         .pipe($.cache($.imagemin({
//             optimizationLevel: 3,
//             progressive: true,
//             interlaced: true
//         })))
//         .pipe(gulp.dest('dist/images'))
//         .pipe($.size());
// });

// // Fonts
// gulp.task('fonts', function() {

// });

// // Clean
// gulp.task('clean', function(cb) {
//     // $.cache.clearAll();
//     cb(del.sync(['dist/styles', 'dist/scripts', 'dist/images']));
// });

// // Bundle
// gulp.task('bundle', ['styles', 'scripts', 'bower'], function() {
//     return gulp.src('./app/*.html')
//         .pipe($.useref.assets())
//         .pipe($.useref.restore())
//         .pipe($.useref())
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('buildBundle', ['styles', 'buildScripts', 'moveLibraries', 'bower'], function() {
//     return gulp.src('./app/*.html')
//         .pipe($.useref.assets())
//         .pipe($.useref.restore())
//         .pipe($.useref())
//         .pipe(gulp.dest('dist'));
// });

// // Move JS Files and Libraries
// gulp.task('moveLibraries',['clean'], function(){
//   // the base option sets the relative root for the set of files,
//   // preserving the folder structure
//   gulp.src(['./app/scripts/**/*.js'], { base: './app/scripts/' })
//   .pipe(gulp.dest('dist/scripts'));
// });


// // Bower helper
// gulp.task('bower', function() {


// });

// gulp.task('json', function() {
//     gulp.src('app/scripts/json/**/*.json', {
//             base: 'app/scripts'
//         })
//         .pipe(gulp.dest('dist/scripts/'));
// });

// // Robots.txt and favicon.ico
// gulp.task('extras', function() {
//     return gulp.src(['app/*.txt', 'app/*.ico'])
//         .pipe(gulp.dest('dist/'))
//         .pipe($.size());
// });

// // Watch
// gulp.task('watch', ['html', 'fonts', 'bundle'], function() {

//     browserSync({
//         notify: false,
//         logPrefix: 'BS',
//         // Run as an https by uncommenting 'https: true'
//         // Note: this uses an unsigned certificate which on first access
//         //       will present a certificate warning in the browser.
//         // https: true,
//         server: ['dist', 'app']
//     });

//     // Watch .json files
//     gulp.watch('app/scripts/**/*.json', ['json']);

//     // Watch .html files
//     gulp.watch('app/*.html', ['html']);

//     gulp.watch(['app/styles/**/*.scss', 'app/styles/**/*.css'], ['styles', 'scripts', reload]);



//     // Watch image files
//     gulp.watch('app/images/**/*', reload);
// });

// // Build
// gulp.task('build', ['html', 'buildBundle', 'images', 'fonts', 'extras'], function() {
//     gulp.src('dist/scripts/app.js')
//         .pipe($.uglify())
//         .pipe($.stripDebug())
//         .pipe(gulp.dest('dist/scripts'));
// });

// // Default task
// gulp.task('default', ['clean', 'build'  ]);