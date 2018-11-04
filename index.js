const argv = require("./arguments");
const findGitRepos = require("./findGitRepos");
const getGitHistory = require("./getGitHistory");
const parseGitHistoryLine = require("./parseGitHistoryLine");
const filterGitHistory = require("./filterGitHistory");
const flattenHistory = require("./flattenHistory");

const histories = findGitRepos(argv.directory)
    .map(gitRepoPath => ({
        gitRepoPath, 
        lines: getGitHistory(gitRepoPath)
            .map(parseGitHistoryLine)
            .filter(filterGitHistory)
    }));

const flattenedHistories = flattenHistory(histories);
console.log(flattenedHistories);