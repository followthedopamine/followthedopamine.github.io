const textEditor = document.getElementById("text-editor");
const rightSplit = document.getElementById("right-split");

const code = `<h1>Portfolio</h1>
<p>This is my portfolio</p>`;
const codeCharacters = code.split("");
let rawCodeProgress = "";
let charCount = 0;

// Returns an array of same size but second element is an array full of coloured characters and stripped htmlentities
const colourCode = (code) => {};

const displayCode = (char) => {
  if (char == "\n") char = "<br />";
  textEditor.innerHTML += char;
};

const updateHTML = () => {
  rightSplit.innerHTML = rawCodeProgress;
};

const updateSite = () => {
  // Go to line
  // Edit line
  char = codeCharacters[charCount];
  rawCodeProgress += char;
  updateHTML();
  displayCode(char);
  charCount++;
};

const startTyping = (code) => {
  setInterval(updateSite, 500);
};

startTyping(code);
