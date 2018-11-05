function flattenHistory(histories) {
    return Array.prototype.concat.apply([],
        histories
            .map(({gitRepoPath, lines}) => {
                return lines.map(line => ({gitRepoPath, ...line}))
            })
        );
}

module.exports = flattenHistory;