// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

function superbowlWin (record) {
    const yearW = record.find(checkWins)
    if (yearW) {
        return yearW.year
    } 
    return undefined
}

function checkWins (recordW) {
    if (recordW.result === "W")
        return recordW.year
}