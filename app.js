

// function mapess(hee) { 

//     let mytabAdd = [];

//     for (let i = 0; i < mytabAdd.length;) {
//        mytabAdd.push(hee); 
//     }

//     return hee
// }

// mapess(10);

// Réaliser une fonction qui génère un tableau de n nombres ( en commencant par 1 ).

// Réaliser une fonction qui prend en paramètre un tableau et retourne la somme de tout les nombres compris dans ce tableau.

function createTable (n){
    let tab = [];
    for (let i = 0; i <= n; i++){
        tab.push(i)
    }
    return tab
}

console.log(createTable(01));

function sum (tab){
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum
}