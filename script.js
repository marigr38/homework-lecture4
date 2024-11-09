// CAPITALIZE EVERY FIRST LETTER OF THE SENTENCE

function capitalizeWords(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });

  return capitalizedWords.join(" ");
}

const inputSentence = "hello! this is sentence.";
const result = capitalizeWords(inputSentence);
console.log(result);

// SORT THE ARRAY OF THE USERS BY AGE IN ORDER

function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Levani", age: 18 },
];

const sortedUsers = sortUsersByAge(users);
console.log(sortedUsers);
