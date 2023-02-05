const textEditor = document.getElementById("text-editor");
const rightSplit = document.getElementById("right-split");

const code = `<div class="center">
	<h1>Mark Jenkins</h1>
	<h2>https://github.com/followthedopamine</h2>
	<h3>followthedopamine@gmail.com</h3>
</div>`;
let rawCodeProgress = "";
let charCount = 0;
let colour = "red";

// Returns an array of same size but second element is an array full of coloured characters and stripped htmlentities
const colourCode = (code) => {};

const displayCode = (char) => {
  if (char === "\n") char = "<br />";
  if (char === "\t") char = "&emsp;";
  if (char === "<") {
    colour = "gray";
    char = addColour(char, colour);
    colour = "red";
  }
  if (char == ">") {
    colour = "gray";
    char = addColour(char, colour);
    colour = "white";
  }
  if (char === "=" || char === "/") {
    let prevColour = colour;
    colour = "gray";
    char = addColour(char, colour);
    colour = prevColour;
  }
  if (char == " " && colour == "red") {
    colour = "orange";
  }
  if (char == '"' && colour != "green") {
    colour = "green";
    char = addColour(char, colour);
  }
  if (char == '"' && colour == "green") {
    char = addColour(char, colour);
    colour = "orange";
  }
  char = addColour(char, colour);
  textEditor.innerHTML += char;
};

const addColour = (char, colour) => {
  return `<span style="color:${colour};">${char}</span>`;
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
