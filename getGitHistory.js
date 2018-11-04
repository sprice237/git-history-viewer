const { execSync } = require("child_process");

function getGitHistory(pathToGitRepo) {
    try {
        const stdout = execSync(`git --no-pager log --format="%h [%aD|%ae] %s"`, {cwd: pathToGitRepo});
        const stdoutString = stdout.toString().trim();
        return stdoutString.split("\n");
    } catch (e) {
        // not much we can do about an error here, just return no commits
        return [];
    }
}

module.exports = getGitHistory;