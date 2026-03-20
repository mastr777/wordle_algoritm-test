
// Test 1
//
// Testet visar att funktionen returnerar "correct" när alla 
// bokstäver i gissningen är identiska med det korrekta ordet.
//
// Om spelaren gissar rätt ord direkt, ska alla resultat bli "correct"


const checkWord = require("./checkWord");


test("all letters are correct", () => {

  const result = checkWord("CYKLA", "CYKLA");

  expect(result).toEqual([

    { letter: "C", result: "correct" },
    { letter: "Y", result: "correct" },
    { letter: "K", result: "correct" },
    { letter: "L", result: "correct" },
    { letter: "A", result: "correct" },

  ]);

});



// 




