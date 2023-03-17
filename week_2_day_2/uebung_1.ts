//=====================================================================
//        Uebung 1
//=====================================================================

type Player = {
    name: string;
    lastLogin: Date;
    id: number;
    email: string;
    playedGame: PlayedGame
};

type Admin = {
    name: string;
    id: number;
    email: string;
    employeeId: number
};


//=====================================================================
//        Uebung 2
//=====================================================================

function getEmail(player: Player): string {
    const result: string = player.email;

    return result;
};




//=====================================================================
//        Uebung 3
//=====================================================================

function getEmailOfAny({ email }: { email: string }): string {
    const result: string = email;

    return result;
};


//=====================================================================
//        Uebung 4
//=====================================================================

type PlayedGame = {
    gameName: string;
    highscore: number
};


//=====================================================================
//        Uebung 5
//=====================================================================

const playerOne: Player = {
    name: "Spieler Eins",
    lastLogin: new Date(),
    id: 555,
    email: "player1@TextDecoderStream.com",
    playedGame: {
        gameName: "Floppy Duck",
        highscore: 100666
    }
};

const playerTwo: Player = {
    name: "Spieler Zwei",
    lastLogin: new Date(),
    id: 666,
    email: "player2@TextDecoderStream.com",
    playedGame: {
        gameName: "Floppy Duck",
        highscore: 100568
    }
};

function evaluateWinner(x: PlayedGame, y: PlayedGame): number {

    let result: number

    if (x.gameName === y.gameName) {
        if (x.highscore > y.highscore) {
            result = 1;
        } else {
            result = -1;
        };
    } else {
        result = 0;
    };

    return result;
};

console.log(evaluateWinner(playerOne.playedGame, playerTwo.playedGame));


//=====================================================================
//        Uebung 6
//=====================================================================

function leaderboard(x: PlayedGame[], y: string): PlayedGame[] {
    let result: PlayedGame[] = [];
    for (let i: number = 0; i < x.length; i++) {
        if (x[i].gameName === y) {
            result.push(x[i]);
        }
    };

    return result.sort((a, b) => b.highscore - a.highscore);
};

console.log(leaderboard([{ gameName: "Floppy Duck", highscore: 100356 }, { gameName: "Floppy Duck", highscore: 100659 }, { gameName: "Floppy Duck", highscore: 100456 }, { gameName: "Tetris", highscore: 100956 }], "Floppy Duck"));



//=====================================================================
//        Uebung 7
//=====================================================================

type Highscore = {
    gameName: string;
    score: number;
    player: Player
};

type Leaderboard = Highscore[];

const playerTree: Player = {
    name: "Spieler Drei",
    lastLogin: new Date(),
    id: 333,
    email: "player3@TextDecoderStream.com",
    playedGame: {
        gameName: "Sonic",
        highscore: 100868
    }
};

const playerFour: Player = {
    name: "Spieler Vier",
    lastLogin: new Date(),
    id: 879,
    email: "player4@TextDecoderStream.com",
    playedGame: {
        gameName: "Sonic",
        highscore: 100268
    }
};
const playerFive: Player = {
    name: "Spieler Fünf",
    lastLogin: new Date(),
    id: 4242,
    email: "player5@TextDecoderStream.com",
    playedGame: {
        gameName: "Tetris",
        highscore: 1009876
    }
};

const playerSix: Player = {
    name: "Spieler Sechs",
    lastLogin: new Date(),
    id: 666616,
    email: "player6@TextDecoderStream.com",
    playedGame: {
        gameName: "Tetris",
        highscore: 100568987
    }
};

const playerSeven: Player = {
    name: "Spieler Sieben",
    lastLogin: new Date(),
    id: 3547653,
    email: "player7@TextDecoderStream.com",
    playedGame: {
        gameName: "Pacman",
        highscore: 1005682574
    }
};

const playerEight: Player = {
    name: "Spieler Acht",
    lastLogin: new Date(),
    id: 336574634,
    email: "player8@TextDecoderStream.com",
    playedGame: {
        gameName: "Pacman",
        highscore: 1002574
    }
};

function leaderboardAdvanced(a: Player, b: Player, c: Player, d: Player, e: Player, f: Player, g: Player, h: Player): Leaderboard {
    const array: Player[] = [a, b, c, d, e, f, g, h];
    let result: Leaderboard = [];

    //let games: string[];

    // for (let i: number = 0; i < array.length; i++) {
    //   if (games.indexOf(array[i].playedGame.gameName) === -1) {
    //     games.push(array[i].playedGame.gameName);
    //  }
    //};

    const sortedArray: Player[] = array.sort((a, b) => b.playedGame.highscore - a.playedGame.highscore);

    console.log("SortedArray: ", sortedArray);
    for (let i: number = 0; i < sortedArray.length; i++) {
        let name: string = sortedArray[i].playedGame.gameName;
        console.log("Name: ", name)
        // if (result.some(name => name['gameName'] !== sortedArray[i].playedGame.gameName))
        if (!result.includes(name)) {
            console.log("Found one: Index ", i);
            result.push({ gameName: sortedArray[i].playedGame.gameName, score: sortedArray[i].playedGame.highscore, player: sortedArray[i] })
        }
        //console.log("GameName ", i, ": ", sortedArray[i].playedGame.gameName);
    }


    return result;

}


//type Highscore = {
//    gameName: string;
//    score: number;
//    player: Player
//};

console.log("Ergebnis : ", leaderboardAdvanced(playerOne, playerTwo, playerTree, playerFour, playerFive, playerSix, playerSeven, playerEight));

//=====================================================================
export { };