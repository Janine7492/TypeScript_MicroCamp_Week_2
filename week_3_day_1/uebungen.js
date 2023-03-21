"use strict";
//=====================================================================
//        Uebung 1
//=====================================================================
Object.defineProperty(exports, "__esModule", { value: true });
function sum(nums) {
    //      Option 1:
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    ;
    return result;
    //      Option 2
    //let summe: number = 0;
    //nums.forEach(element => {
    //    summe += element;
    //});
    //return summe;
    //      Option 3
    //return nums.reduce((a, b) => a + b, 0);
}
console.log("Übung 1:");
console.log(sum([1, 2, 3]));
console.log(sum([]));
//=====================================================================
//        Uebung 2
//=====================================================================
function sumTwo(param) {
    let result = [];
    param.forEach(element => {
        result.push(`${element}`);
    });
    //console.log(typeof (result.join("")));
    return result.join("");
}
console.log("Übung 2:");
console.log(sumTwo([1, "test", 3]));
//=====================================================================
//        Uebung 3
//=====================================================================
//  n.a.
//=====================================================================
//        Uebung 4
//=====================================================================
function genLength(arr) {
    return arr.length;
}
console.log("Übung 4:");
console.log(genLength([1, 2, 3, 4]));
console.log(genLength(["eins", "zwei", "drei", "vier"]));
console.log(genLength(["eins", 2, "drei", 4]));
//=====================================================================
//        Uebung 5
//=====================================================================
function genLast(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    else {
        return arr[arr.length - 1];
    }
}
console.log("Übung 5:");
console.log(genLast([1, 2, 3, 4]));
console.log(genLast(["eins", "zwei", "drei", "vier"]));
console.log(genLast(["eins", 2, "drei", 4]));
console.log(genLast([]));
//=====================================================================
//        Uebung 6
//=====================================================================
function genLastTwo(arr) {
    if (Array.isArray(arr)) {
        return genLast(arr);
    }
    else {
        return arr;
    }
}
;
console.log("Übung 6:");
console.log(genLastTwo([1, 2, 3, 4]));
console.log(genLastTwo(["eins", "zwei", "drei", "vier"]));
console.log(genLastTwo(["eins", 2, "drei", 4]));
console.log(genLastTwo([]));
console.log(genLastTwo(5));
console.log(genLastTwo("hallo"));
//=====================================================================
//        Uebung 7
//=====================================================================
function genArrRange(arr, a, b) {
    if (a < 0) {
        return "Der Startwert muss größer oder gleich 0 sein!";
    }
    if (b > arr.length) {
        return "Der Endwert muss kleiner als die Länge des Arrays sein!";
    }
    let result = arr.slice(a, b + 1);
    //for (let i: number = a; i <= b; i++) {
    //    result.push(arr[i]);
    //};
    if (result.length === 1) {
        return result.join("");
    }
    else {
        return result;
    }
    ;
}
;
console.log("Übung 7:");
console.log(genArrRange([1, "zwei", 3, 4], 0, 2));
console.log(genArrRange([1, 2, "drei", 4], 0, 0));
console.log(genArrRange([1, 2, 3, 4], 0, 6));
console.log(genArrRange([1, 2, 3, 4], -2, 0));
//# sourceMappingURL=uebungen.js.map