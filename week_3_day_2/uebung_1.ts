//=====================================================================
//        Uebung 1
//=====================================================================

type NameBirthday = [string, Date];


//=====================================================================
//        Uebung 2
//=====================================================================

function daysUntil(param: NameBirthday): number {
    const today: Date = new Date();
    let bDay: Date = new Date(param[1].setFullYear(today.getFullYear()));

    if (today > bDay) {
        bDay.setFullYear(today.getFullYear() + 1);
    }



    let result: number = Math.floor((bDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    //let returnValue: string = `Tage bis zum Geburtstag: ${result}`;
    return result;
}

console.log("Übung 2:");
console.log(daysUntil(["Janine", new Date(1992, 3, 8)]));


//=====================================================================
//        Uebung 3
//=====================================================================

type BirthdayListElement = [string, number]

function birthdayList(param: NameBirthday[]): BirthdayListElement[] {
    let newArray: BirthdayListElement[] = [];

    param.forEach(element => {
        let days: number = daysUntil(element);

        newArray.push([element[0], days]);
    })

    let sortedNewArray: BirthdayListElement[] = newArray.sort((a, b) => a[1] - b[1]);

    return sortedNewArray;
};

console.log("Übung 3:");
console.log(birthdayList([["Peter", new Date(1994, 3, 25)], ["Anna", new Date(1994, 11, 10)], ["Janine", new Date(1992, 3, 8)]]));


//=====================================================================
//        Uebung 4
//=====================================================================

function nextBDay(param: NameBirthday[]): string {
    let sortedArray: BirthdayListElement[] = birthdayList(param);
    let sortedArrayFirst: BirthdayListElement = sortedArray[0]

    let result: string = `Als nächstes hat in ${sortedArrayFirst[1]} Tagen ${sortedArrayFirst[0]} Geburtstag.`;

    return result
};

console.log("Übung 4:");
console.log(nextBDay([["Peter", new Date(1994, 3, 25)], ["Anna", new Date(1994, 11, 10)], ["Janine", new Date(1992, 3, 8)]]));







//=====================================================================
export { };