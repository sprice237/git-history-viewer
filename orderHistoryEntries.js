const _ = require("lodash");

function orderHistoryEntries(historyEntries) {
    return _.orderBy(historyEntries, ["date"])
}

module.exports = orderHistoryEntries;