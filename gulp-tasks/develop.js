module.exports = function (done) {
    let gulp = require("gulp"),
        runSequence = require("run-sequence").use(gulp);

    return runSequence(
        "check-deps",
        "prepare-assets",
        "prepare-config",
        "clear-image-cache",
        "watch-scss",
        "watch-svg",
        "watch-images-optimize",
        done
    );
};
