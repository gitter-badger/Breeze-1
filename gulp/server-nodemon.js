import bg from 'gulp-bg';
import path from 'path';
import gulp from 'gulp';

const nodemonPath = 'node_modules/.bin/nodemon';

gulp.task('server-nodemon', (cb) => {
  bg(nodemonPath, path.normalize('src/server'))(cb);
});
