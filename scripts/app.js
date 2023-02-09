const textEditor = document.getElementById("text-editor");
const rightSplit = document.getElementById("right-split");

const code = `		<div class="center dark-bg">
			<div class="container">
				<h1>Mark Jenkins</h1>
				<h2>https://github.com/followthedopamine</h2>
				<h3>followthedopamine@gmail.com</h3>
				<p>
					I'm a passionate hobbyist programmer with expertise in competitive
					programming, machine learning, and game development. Seeking to
					make my mark in the thriving NZ video game industry, I'm looking
					for entry-level opportunities to showcase my skills and drive.
					Let's create something amazing together.
				</p>
				<div id="featured-thumbnails">
					<span class="col-1">
						<img class="large-thumbnail" src="/img/banquet-blitz-thumb.png" />
					</span>
				</div>
				<div id="thumbnails">
					<div class="col-3">
						<img
							class="medium-thumbnail left-thumbnail"
							src="/img/test.png"
						/>
					</div>
					<div class="col-3">
						<img class="medium-thumbnail" src="/img/test.png" />
					</div>
					<div class="col-3">
						<img
							class="medium-thumbnail right-thumbnail"
							src="/img/test.png"
						/>
					</div>
				</div>
			</div>
		</div>`;
let rawCodeProgress = "";
let charCount = 0;
let colour = "red";
let lineNumber = 1;

// Returns an array of same size but second element is an array full of coloured characters and stripped htmlentities
const colourCode = (code) => {};

const displayCode = (char) => {
  if (char === "\n") {
    char = "<br />" + addColour(lineNumber, "gray");
    lineNumber++;
  }
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

  if (charCount == 0) {
    char = addColour(lineNumber, "gray") + char;
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
