'use strict';

const gulp = tars.packages.gulp;
const runSequence = tars.packages.runSequence.use(gulp);

/**
 * Build dev-version (without watchers)
 */
module.exports = () => {
    return gulp.task('main:build-dev', function (cb) {
        tars.options.notify = false;
        tars.options.watch.isActive = this.seq.slice(-1)[0] === 'dev' ? true : false; // eslint-disable-line no-invalid-this

        runSequence(
            'service:clean',
            ['img:minify-svg', 'img:raster-svg'],
            [
                'css:make-sprite-for-svg', 'css:make-fallback-for-svg', 'css:make-sprite',
                'img:make-symbols-sprite'
            ],
            [
                'css:compile-css', 'css:compile-css-for-ie8', 'css:compile-css-for-ie9', 'css:move-separate',
                'html:concat-mocks-data',
                'other:move-misc-files', 'other:move-fonts', 'other:move-assets',
                'img:move-content-img', 'img:move-plugins-img', 'img:move-general-img',
                'js:move-separate'
            ],
            [
                'js:processing',
                'html:compile-templates'
            ],
            cb
        );
    });
};
