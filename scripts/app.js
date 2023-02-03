const textEditor = document.getElementById("text-editor");

const code = [
  [1, ["<h1>Portfolio</h1>"]],
  [2, ["<p>This is my portfolio</p>"]],
];

// Returns an array of same size but second element is an array full of coloured characters
const colourCode = (code) => {};

const displayHTML = (html) => {
  textEditor.innerHTML += html;
};

const displayCode = (code) => {
  code.forEach((line) => {
    line[1].forEach((char) => {
      displayHTML(char);
    });
  });
};

displayCode(code);
