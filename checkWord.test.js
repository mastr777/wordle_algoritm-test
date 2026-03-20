
// Test 1 - Correct letters
//
// Testet visar att funktionen returnerar "correct" när alla 
// bokstäver i gissningen är identiska med det korrekta ordet
//
// Om spelaren gissar rätt ord direkt, ska alla resultat bli "correct"


const checkWord = require("./checkWord");


test("all letters are correct", () => {

    // ord 1, korrekt ord - ord 2, gissat ord
  const result = checkWord("CYKLA", "CYKLA");

  expect(result).toEqual([

    { letter: "C", result: "correct" },
    { letter: "Y", result: "correct" },
    { letter: "K", result: "correct" },
    { letter: "L", result: "correct" },
    { letter: "A", result: "correct" },

  ]);

});



// Test 2 - Misplaced letter
//
// Testet verifierar att funktionen returnerar "misplaced" när en
// bokstav finns i ordet, men på fel platrs


test("a letter exists but is misplaced", () => {

    const result = checkWord("ABCD", "XYZA");

    expect(result).toEqual([

        { letter: "A", result: "misplaced" },
        { letter: "B", result: "incorrect" },
        { letter: "C", result: "incorrect" },
        { letter: "D", result: "incorrect" }
    ]);
});



// Test 3 - Duplicate letters
// Test 3 verifierar att funktionen hanterar dubbla bokstäver på korrekt sätt
//
// Endast det antal bokstäver som finns i det korrekta ordet ska markeras 
// som "correct", eller "misplaced". De andra bokstäverna ska bli "incorrect"


test("handles duplicate letters correctly", () => {
    const result = checkWord("HALLÅ", "CYKLA");

  expect(result).toEqual([

    { letter: "H", result: "incorrect" },
    { letter: "A", result: "misplaced" },
    { letter: "L", result: "incorrect" },
    { letter: "L", result: "correct" },
    { letter: "Å", result: "incorrect" }

  ]);

});



// Test 4 - No letters are present
// Det här testet verifierar att funktionen returnerar "incorrect" för alla bokstäver
// när inga bokstäver från gissningsordet finns med i det korrekta ordet
//
// när spelaren gissar med ett ord där ingen av bokstäverna finns med i det korrekta ordet

test("no letters present in the correct word", () => {

    const result = checkWord("HIEROGLYF", "ANANAS");

  expect(result).toEqual([

    { letter: "H", result: "incorrect" },
    { letter: "I", result: "incorrect" },
    { letter: "E", result: "incorrect" },
    { letter: "R", result: "incorrect" },
    { letter: "O", result: "incorrect" },
    { letter: "G", result: "incorrect" },
    { letter: "L", result: "incorrect" },
    { letter: "Y", result: "incorrect" },
    { letter: "F", result: "incorrect" }

  ]);

});





