'use strict';

const gulp = tars.packages.gulp;
const cache = tars.packages.cache;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const browserSync = tars.packages.browserSync;

const generalImagesFolder = `${tars.config.fs.staticFolderName}/${tars.config.fs.imagesFolderName}/general`;

/**
 * Move general img
 */
module.exports = () => {
    return gulp.task('img:move-general-img', () => {
        return gulp.src(
                /* eslint-disable indent */
                [
                    `./markup/${generalImagesFolder}/**/*.*`,
                    `!./markup/${generalImagesFolder}/**/*.tmp`
                ]
                /* eslint-enable indent */
            )
            .pipe(plumber({
                errorHandler(error) {
                    notifier.error('An error occurred while moving general img.', error);
                }
            }))
            .pipe(cache('move-general-img'))
            .pipe(gulp.dest(`./dev/${generalImagesFolder}`))
            .pipe(browserSync.reload({ stream: true }))
            .pipe(
                notifier.success('General img\'ve been moved')
            );
    });
};
