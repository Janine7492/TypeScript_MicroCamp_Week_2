//=====================================================================
//        Uebung 1
//=====================================================================

type MyString = string;

const text: MyString = "Hallo";


//=====================================================================
//        Uebung 2
//=====================================================================

type MyNumber = number;
const num: MyNumber = 13;

type StringOrNumber = string | number;
let variableOne: StringOrNumber = num;
//let variableOne: StringOrNumber = true;


//=====================================================================
//        Uebung 3
//=====================================================================
function introduction(a: StringOrNumber): string {
    let result: string = `Hallo, mein Inhalt ist: ${a}`;

    return result;
}

console.log("~ Uebung 3 ~");

console.log(introduction("Lars"));
//console.log(introduction(true));
console.log(introduction(6));



//=====================================================================
//        Uebung 4
//=====================================================================

function showContent(a: string | undefined): string {
    let result: string
    if (typeof a === 'string') {
        result = `Hallo mein Inhalt ist: ${a}`
    } else if (a === undefined) {
        result = "Ich habe keinen Inhalt"
    }

    return result;
}

console.log("~ Uebung 4 ~");
console.log(showContent("Test"));
console.log(showContent(undefined));


//=====================================================================
//        Uebung 5
//=====================================================================

function keepPlaying(a: number | boolean): boolean {
    let result: boolean
    if (typeof a === 'number' && a < 10) {
        result = true;
    } else if (typeof a === 'number' && a >= 10) {
        result = false;
    } else if (typeof a === 'boolean') {
        result = a;
    };

    return result;
}

console.log("~ Uebung 5 ~");
console.log(keepPlaying(2));
console.log(keepPlaying(true));
console.log(keepPlaying(false));
console.log(keepPlaying(11));


//=====================================================================
//        Uebung 6
//=====================================================================

function move(a: string): number | undefined {
    let param: string = a.toLowerCase();
    let result: number | undefined;

    if (param === "links") {
        result = 0
    } else if (param === "rechts") {
        result = 1
    } else if (param === "vor" || param === "vorwärts" || param === "vorwaerts" || param === "oben") {
        result = 2
    } else if (param === "zurueck" || param === "rueckwaerts" || param === "zurück" || param === "rückwärts" || param === "unten") {
        result = 3
    } else {
        result = undefined
    }

    return result;
};

console.log("~ Uebung 6 ~");
console.log(move("links"));
console.log(move("LiKns"));
console.log(move("RECHTS"));
console.log(move("zurück"));
console.log(move("Mach einen Backflip"));
console.log(move("lskdg"));


//=====================================================================
//        Uebung 7
//=====================================================================

function moveNew(event): string {
    let inp: string = event.target.value;

    let result = move(inp);

    if (typeof result === 'number') {
        return document.getElementById("directionOutput").innerText = result.toString();
    } else {
        return document.getElementById("directionOutput").innerText = "Bitte gib eine gültige Richtung ein!";
    }
}

//=====================================================================
export { };