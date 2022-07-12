let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

var a = Math.floor(Math.random() * who.length);
var b = Math.floor(Math.random() * action.length);
var c = Math.floor(Math.random() * what.length);
var d = Math.floor(Math.random() * when.length);

let arrExcuse = [who[a] + " " + action[b] + " " + what[c] + " " + when[d]];
document.getElementById("excusa").innerHTML = arrExcuse;
