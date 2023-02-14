const textEditor = document.getElementById("text-editor");
const rightSplit = document.getElementById("right-split");

const code = `		<div class="center dark-bg">
			<div class="container">
				<h1>Mark Jenkins</h1>
				<h2><a href="https://github.com/followthedopamine">https://github.com/followthedopamine</a></h2>
				<h3><a href="https://linkedin.com/in/follow-the-dopamine"> https://linkedin.com/in/follow-the-dopamine</a></h3>
				<p>
					I'm a passionate programmer with expertise in competitive
					programming, machine learning, and game development.
				</p>
				<div id="featured-thumbnails">
					<span class="col-1">
						<a href="https://play.google.com/store/apps/details?id=com.ComputerMarmalade.FoodSwitch" target="_blank">
							<img class="large-thumbnail" src="/img/banquet-blitz-thumb.png" />
						</a>
					</span>
				</div>
				<div id="thumbnails">
					<div class="col-3">
						<a href="https://nopaynenogame.itch.io/bullshit" target="_blank">
							<img class="medium-thumbnail left-thumbnail" src="/img/bullshit-thumb.png" />
						</a>
					</div>
					<div class="col-3">
						<a href="/wordle-clone/" target="_blank">
							<img class="medium-thumbnail" src="/img/wordle-thumb.png" />
						</a>
					</div>
					<div class="col-3">
						<a href="/stacker-game-js/" target="_blank">
							<img class="medium-thumbnail right-thumbnail" src="/img/stacker-thumb.png" />
						</a>
					</div>
				</div>
			</div>
		</div>`;
let rawCodeProgress = "";
let charCount = 0;
const red = "#e06c75";
const gray = "#4b5263";
const orange = "#e5c07b";
const green = "#98c379";
const white = "#abb2bf";
const darkGray = "#4b5263";
let colour = red;
let lineNumber = 1;

// Returns an array of same size but second element is an array full of coloured characters and stripped htmlentities
const colourCode = (code) => {};

const displayCode = (char) => {
  if (char === "\n") {
    char = "<br />" + addColour(lineNumber, gray);
    lineNumber++;
  }
  if (char === "\t") char = "&emsp;";
  if (char === "<") {
    colour = gray;
    char = addColour(char, colour);
    colour = red;
  }
  if (char == ">") {
    colour = gray;
    char = addColour(char, colour);
    colour = white;
  }
  if (char === "=" || char === "/") {
    let prevColour = colour;
    colour = gray;
    char = addColour(char, colour);
    colour = prevColour;
  }
  if (char == " " && colour == red) {
    colour = orange;
  }
  if (char == '"' && colour != green) {
    colour = green;
    char = addColour(char, colour);
  }
  if (char == '"' && colour == green) {
    char = addColour(char, colour);
    colour = orange;
  }
  char = addColour(char, colour);

  if (charCount == 0) {
    char = addColour(lineNumber, darkGray) + char;
    lineNumber++;
  }
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
  setInterval(updateSite, 20);
};

startTyping(code);
