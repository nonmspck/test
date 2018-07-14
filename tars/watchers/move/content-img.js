'use strict';

const imagesFolderPath = `markup/${tars.config.fs.staticFolderName}/${tars.config.fs.imagesFolderName}`;

/**
 * Watcher for img in assets dir of components
 */
module.exports = () => {
    return tars.packages.chokidar.watch(
        `${imagesFolderPath}/content/**/*.*`,
        Object.assign(tars.options.watch, {
            ignored: `${imagesFolderPath}/content/**/*.tmp`
        })
    ).on('all', (event, watchedPath) => {
        tars.helpers.watcherLog(event, watchedPath);
        tars.packages.gulp.start('img:move-content-img');
    });
};
