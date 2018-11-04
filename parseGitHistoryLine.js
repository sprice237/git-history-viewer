const moment = require("moment");

function parseGitHistoryLine(line) {
    const regex = new RegExp("^(.*) \\[(.*)\\|(.*)] (.*)$");
    const matches = regex.exec(line);
    if (matches.length < 5) {
        return null;
    } else {
        const [fullString, commitId, dateStr, author, message] = matches;
        const date = moment(dateStr).toDate();
        return {commitId, date, author, message}
    }
}

module.exports = parseGitHistoryLine;