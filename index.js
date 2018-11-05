#!/usr/bin/env node

const argv = require("./arguments");
const findGitRepos = require("./findGitRepos");
const getGitHistory = require("./getGitHistory");
const parseGitHistoryLine = require("./parseGitHistoryLine");
const filterGitHistory = require("./filterGitHistory");
const flattenHistory = require("./flattenHistory");
const orderHistoryEntries = require("./orderHistoryEntries");
const formatHistoryEntries = require("./formatHistoryEntries");

const histories = findGitRepos(argv.directory)
    .map(gitRepoPath => ({
        gitRepoPath, 
        lines: getGitHistory(gitRepoPath)
            .map(parseGitHistoryLine)
            .filter(filterGitHistory)
    }));

const flattenedHistoryEntries = flattenHistory(histories)
const orderedHistories = orderHistoryEntries(flattenedHistoryEntries)
const formattedHistoryEntries = formatHistoryEntries(orderedHistories);
console.log(formattedHistoryEntries);