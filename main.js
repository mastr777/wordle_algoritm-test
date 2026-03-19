// wordle algoritm - start

function checkWord(word1, word2) {
  let result = [];

  for (let i = 0; i < word1.length; i++) {

    if (word1[i] === word2[i]) {
        result.push({ letter: word1[i], result: "correct" });
    } else if (word2.includes(word1[i])) {
        result.push({ letter: word1[i], result: "misplaced" });
    } else {
        result.push({ letter: word1[i], result: "incorrect"});
    }
    
  }

  return result;
}






