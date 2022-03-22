// Loops Exercise

// 1
for (i = 1; i <= 7; i++){
    console.log(i);
  };

// or
/*
for (i = 1; i < 8; i++){
    console.log(i);
  };
*/
console.log(`===========`);

  // 2
  for (i = 5; i <= 25; i += 4){
    console.log(i);
  };
  // i += 4 is the same as i = i + 4

  console.log(`=`.repeat(25));

  // 3a
  const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];

  // 3b
  for (list of wizards) {
      console.log(list);
  };

console.log(`=`.repeat(25));

  // Christine Jackson's for loop
  for (i = 0; i < wizards.length; i++)
  console.log(wizards[i]);

  // 4a
  let harryPotterMovies = 0;

  // 4b
  while (harryPotterMovies < 8){
   // console.log(harryPotterMovies); removed
    harryPotterMovies++;
  }

  // 4c
  console.log(harryPotterMovies);

  // Per Jamie Flynt: Another way to think about this problem is that the console log inside of the while loop is running until the while loop terminates.  The inside loop is before the ++. The one outside of the while loop will run the final value of Harry Potter movies (it is running until the very end).

console.log(`=`.repeat(25));

  // Bonus
  // 5a
  const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  console.log(hogwartsHouses);

console.log(`=`.repeat(25));

  // 5b
  // By nesting the letters variable under the list of hogwartsHouses, each letter is looked at as an index and printed
  
  for (list of hogwartsHouses){
    
   for (letters of list){
    console.log(letters);
  }
  console.log(`=`.repeat(25)); // Kat Seaton's idea to separate each vertically spelled house name.
}
console.log(`===============`);

// 6a
const quote = ["Yer", "A", "Wizard", "Harry"];

// 6b
// Not correct method but works:
// console.log(...quote);

// Not correct method:
//let hagridQuote = quote.join(" ");
//console.log(hagridQuote);

// /*
 for (all = 0; all <= 0; all++){
   console.log(quote.join(` `));
 }

// or
/*
let magicQuote = ``;
for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[]}`
}
*/
// 7 Question inspired by FizzBuzz

/* My incorrect solution
for (i = 1; i <= 25; i++){
    console.log(i);
  
    // Nested Loop (Note: Can't use i because can't redeclare variable)
    for (x = 3; x <= 25; x+3){
      console.log(`${x}. Expecto`);
    }
    for (y = 5; y <= 25; y+5){
      console.log(`${y}. Petronum`);
    }
  }
  */

  for (i = 1; i <=25; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`Expecto patronum`);
    } else if (i % 3 === 0) {
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }  
  }