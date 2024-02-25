
function superbowlWin(record) {
const winRecord = record.find((record) => record.result === "W");
if (winRecord) {
    return winRecord.year;
} else {
    return undefined;
}
}