const argv = require("./arguments");

function filterGitHistory(line) {
    if (argv.author != null && !Array.isArray(argv.author) && line.author !== argv.author) return false;
    if (argv.author != null && Array.isArray(argv.author) && !argv.author.includes(line.author)) return false;
    if (argv.startDate != null && argv.startDate.diff(line.date) >= 0) return false;
    if (argv.endDate != null && argv.endDate.diff(line.date) < 0) return false;
    return true;
}

module.exports = filterGitHistory;