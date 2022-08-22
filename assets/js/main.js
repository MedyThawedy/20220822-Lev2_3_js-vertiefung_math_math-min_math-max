
let dasAlterDerEltern = [55, 66];
let dasAlterDerGeschwister = [26, 16, 18];
let dasAlterDerFussballspieler = [22, 33, 23, 35, 34, 37, 29, 27, 24, 25];

//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let youngestParent;
let youngestSiblings;
let youngestFootballPlayer;
let arrayAges = [];
let youngestAge = [];
let i = 0;

let sortParentAge = (dasAlterDerEltern) => {

    youngestParent = dasAlterDerEltern.sort(function (a, b) {
        return a - b;
    });

    console.log('Youngest parent age = ' + youngestParent[0]);

    arrayAges[i] = youngestParent[0];

}

let sortSiblingsAge = (youngestSiblings) => {

    ++i;

    youngestSiblings = dasAlterDerGeschwister.sort(function (a, b) {
        return a - b;
    });

    console.log('Youngest siblings age = ' + youngestSiblings[0]);

    arrayAges[i] = youngestSiblings[0];

}


let sortFootballPlayer = (dasAlterDerFussballspieler) => {

    ++i;

    youngestFootballPlayer = dasAlterDerFussballspieler.sort(function (a, b) {
        return a - b;
    });

    console.log('Youngest football player age = ' + youngestFootballPlayer[0]);

    arrayAges[i] = youngestFootballPlayer[0];
}

let FnYoungestAge = (arrayAges) => {

    youngestAge = arrayAges.sort(function (a, b) {
        return a - b;
    });

    console.log('Youngest age = ' + youngestAge[0]);
}




console.log(dasAlterDerEltern);
sortParentAge(dasAlterDerEltern);

console.log(dasAlterDerGeschwister);
sortSiblingsAge(dasAlterDerGeschwister);

console.log(dasAlterDerFussballspieler);
sortFootballPlayer(dasAlterDerFussballspieler);

console.log(arrayAges);
FnYoungestAge(arrayAges);
