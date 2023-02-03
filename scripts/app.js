const textEditor = document.getElementById("text-editor");
const rightSplit = document.getElementById("right-split");

const code = [
  [1, ["<h1>Portfolio</h1>"]],
  [2, ["<p>This is my portfolio</p>"]],
];

let rawCodeProgress = "";

// Returns an array of same size but second element is an array full of coloured characters and stripped htmlentities
const colourCode = (code) => {};

const displayCode = (html) => {
  textEditor.innerHTML += html;
};

const displayHTML = () => {
  rightSplit.innerHTML = rawCodeProgress;
};

const updateSite = (code) => {
  code.forEach((line) => {
    line[1].forEach((char) => {
      rawCodeProgress += char;
      displayCode(char);
    });
  });
  displayHTML();
};

updateSite(code);
