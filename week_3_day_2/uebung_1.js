"use strict";
//=====================================================================
//        Uebung 1
//=====================================================================
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================================================
//        Uebung 2
//=====================================================================
function daysUntil(param) {
    const today = new Date();
    let bDay = new Date(param[1].setFullYear(today.getFullYear()));
    if (today > bDay) {
        bDay.setFullYear(today.getFullYear() + 1);
    }
    let result = Math.floor((bDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    //let returnValue: string = `Tage bis zum Geburtstag: ${result}`;
    return result;
}
console.log("Übung 2:");
console.log(daysUntil(["Janine", new Date(1992, 3, 8)]));
function birthdayList(param) {
    let newArray = [];
    param.forEach(element => {
        let days = daysUntil(element);
        newArray.push([element[0], days]);
    });
    let sortedNewArray = newArray.sort((a, b) => a[1] - b[1]);
    return sortedNewArray;
}
;
console.log("Übung 3:");
console.log(birthdayList([["Peter", new Date(1994, 3, 25)], ["Anna", new Date(1994, 11, 10)], ["Janine", new Date(1992, 3, 8)]]));
//=====================================================================
//        Uebung 4
//=====================================================================
function nextBDay(param) {
    let sortedArray = birthdayList(param);
    let sortedArrayFirst = sortedArray[0];
    let result = `Als nächstes hat in ${sortedArrayFirst[1]} Tagen ${sortedArrayFirst[0]} Geburtstag.`;
    return result;
}
;
console.log("Übung 4:");
console.log(nextBDay([["Peter", new Date(1994, 3, 25)], ["Anna", new Date(1994, 11, 10)], ["Janine", new Date(1992, 3, 8)]]));
//# sourceMappingURL=uebung_1.js.map