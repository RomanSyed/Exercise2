countBs = alpha => {
  let count = 0;
  word = "BBC";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == alpha) count += 1;
  }
  console.log(count);
};
countBs("B");

countChar = (word, alpha) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == alpha) count += 1;
  }
  console.log(count);
};
countChar("kakkerak", "k");
