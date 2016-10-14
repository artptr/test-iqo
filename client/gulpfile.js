const gulp = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

gulp.task('js', () =>
    gulp.src('src/scripts/main.js')
        .pipe(named())
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: 'babel',
                        query: {
                            presets: ['react', 'es2015']
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest('./dist'))
);

gulp.task('static', () =>
    gulp.src('./src/static/**/*')
        .pipe(gulp.dest('./dist'))
);

gulp.task('default', ['js', 'static']);
