// code your solution here
function superbowlWin(collection) {
    for (const record of collection) {
        if (record.result === "W") {
            console.log(record.year)
            return record.year
        }
    }
}
const records = [
    {year: 2015, result: "W"}
]
const winningYear =superbowlWin(records);
console.log(winningYear)