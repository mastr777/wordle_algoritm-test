// wordle algoritm - start

function checkWord(word1, word2) {

  let result = [];
  let lettersLeftover = word2.split('');

  // hitta korrekt bokstav

  for (let i = 0; i < word1.length; i++) {

    if (word1[i] === word2[i]) {
        result.push({letter: word1[i], result: 'correct'});
        lettersLeftover[i] = null;
    } else {
        result.push({letter: word1[i], result: ''});
    }
    
  }

  // hitta felplacerad eller fel bokstav

  for (let i = 0; i < word1.length; i++) {
    if (result[i].result === '') {
      let index = lettersLeftover.indexOf(word1[i]);

      if (index !== -1) {
        result[i].result = 'misplaced';
        lettersLeftover[index] = null;
      } else {
        result[i].result = 'incorrect';
      }
      
    }
  }

  return result;
}






