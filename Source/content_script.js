const sentence = document.body.innerText;
const words = sentence.split(" ");
let newSentence = "";

words.forEach(word => {
  const firstHalf = word.slice(0, Math.ceil(word.length / 2));
  const secondHalf = word.slice(Math.ceil(word.length / 2));
  newSentence += "<span style='font-weight:bold'>" + firstHalf + "</span>" + secondHalf + " ";
});

document.body.innerHTML = newSentence;
