function flattenHistory(histories) {
    const flattenedHistories = Array.prototype.concat.apply([],
    histories
        .map(({gitRepoPath, lines}) => {
            return lines.map(line => ({gitRepoPath, ...line}))
        })
    );

    return flattenedHistories.map(({gitRepoPath, commitId, date, author, message}) => `${gitRepoPath}\t${commitId}\t${date}\t${author}\t${message}`).join("\n");
}

module.exports = flattenHistory;