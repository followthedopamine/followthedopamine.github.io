const textEditor = document.getElementById("text-editor");
const rightSplit = document.getElementById("right-split");

const code = `<div>
	<h1>Portfolio</h1>
	<p>This is my portfolio</p>
</div>`;
let rawCodeProgress = "";
let charCount = 0;

// Returns an array of same size but second element is an array full of coloured characters and stripped htmlentities
const colourCode = (code) => {};

const displayCode = (char) => {
  if (char == "\n") char = "<br />";
  if (char == "\t") {
    char = "&emsp;";
    console.log("Test");
  }
  if (char == " ") {
    console.log("Space test");
  }
  textEditor.innerHTML += char;
};

const updateHTML = () => {
  rightSplit.innerHTML = rawCodeProgress;
};

const updateSite = () => {
  // Go to line
  // Edit line
  char = code.charAt(charCount);
  rawCodeProgress += char;
  updateHTML();
  displayCode(char);
  charCount++;
};

const startTyping = (code) => {
  setInterval(updateSite, 500);
};

startTyping(code);
