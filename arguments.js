const moment = require("moment");

const argv = require('yargs')
    .usage("Usage: $0 [options]")
    .alias("d", "directory")
    .nargs("d", 1)
    .describe("d", "Parent directory")
    .alias("a", "author")
    .nargs("a", 1)
    .describe("a", "Author email address")
    .alias("s", "start-date")
    .nargs("s", 1)
    .string("s")
    .describe("s", "Start date")
    .coerce("s", arg => {
        if (Array.isArray(arg)) throw new Error("Only one occurrence allowed: start date");
        const momentDate = moment(arg, "YYYY-MM-DD");
        return momentDate.isValid() ? momentDate : null;
    })
    .alias("e", "end-date")
    .nargs("e", 1)
    .string("e")
    .describe("e", "End date")
    .coerce("e", arg => {
        if (Array.isArray(arg)) throw new Error("Only one occurrence allowed: end date");
        const momentDate = moment(arg, "YYYY-MM-DD");
        return momentDate.isValid() ? momentDate : null;
    })
    .help("h")
    .alias("h", "help")
    .argv;

module.exports = argv;