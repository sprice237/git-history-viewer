function formatHistoryEntries(historyEntries) {
    return historyEntries.map(({gitRepoPath, commitId, date, author, message}) => `${gitRepoPath}\t${commitId}\t${date}\t${author}\t${message}`).join("\n");
}

module.exports = formatHistoryEntries;