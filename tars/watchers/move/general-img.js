'use strict';

const imagesFolderPath = `markup/${tars.config.fs.staticFolderName}/${tars.config.fs.imagesFolderName}`;

/**
 * Watcher for general img
 */
module.exports = () => {
    return tars.packages.chokidar.watch(
        `${imagesFolderPath}/general/**/*.*`,
        Object.assign(tars.options.watch, {
            ignored: `${imagesFolderPath}/general/**/*.tmp`
        })
    ).on('all', (event, watchedPath) => {
        tars.helpers.watcherLog(event, watchedPath);
        tars.packages.gulp.start('img:move-general-img');
    });
};
