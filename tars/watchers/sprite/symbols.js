'use strict';

const gulp = tars.packages.gulp;
const runSequence = tars.packages.runSequence.use(gulp);

/**
 * Watcher for img for symbols (svg)
 */
module.exports = () => {

    if (tars.config.svg.active && tars.config.svg.workflow === 'symbols') {

        return tars.packages.chokidar.watch(
            `markup/${tars.config.fs.staticFolderName}/${tars.config.fs.imagesFolderName}/svg/**/*.svg`,
            tars.options.watch
        ).on('all', (event, watchedPath) => {
            tars.helpers.watcherLog(event, watchedPath);

            runSequence(
                'img:minify-svg',
                'img:make-symbols-sprite',
                'html:concat-mocks-data',
                'html:compile-templates',
                () => {}
            );
        });
    }

    return false;
};
