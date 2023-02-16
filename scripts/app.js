const code = `
			<div class="center dark-bg">
				<div class="container">
					<h1>mark jenkins</h1>
					<h2>
						<a href="https://github.com/followthedopamine">
							https://github.com/followthedopamine
						</a>
					</h2>
					<h3>
						<a href="https://linkedin.com/in/follow-the-dopamine">
							https://linkedin.com/in/follow-the-dopamine
						</a>
					</h3>
					<p id="intro">
						I'm a passionate programmer with expertise in competitive
						programming, machine learning, and game development.
					</p>
					<div class="col-1">
						<a
							href="https://play.google.com/store/apps/details?id=com.ComputerMarmalade.FoodSwitch"
							target="_blank"
						>
							<div class="card">
								<img
									class="large-thumbnail"
									src="/img/banquet-blitz-thumb.png"
								/>
								<div class="card-content">
									<div class="card-content-left center-vertical">
										<div>
											<h4>Banquet Blitz</h4>
											<p>Match-3 style game for Android</p>
										</div>
									</div>
									<div class="card-content-right center-vertical">
										<a
											href="https://github.com/followthedopamine/food-switch"
											target="_blank"
											class="btn"
										>
											View Code &lt;/&gt;
										</a>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-3">
						<a href="https://nopaynenogame.itch.io/bullshit" target="_blank">
							<div class="card left-card">
								<img
									class="medium-thumbnail left-thumbnail"
									src="/img/bullshit-thumb.png"
								/>

								<div class="card-content">
									<div>
										<h5>Bulls Hit</h5>
									</div>
									<a
										href="https://github.com/NoPayneNoGame/bull-in-a-china-shop"
										target="_blank"
										class="btn"
									>
										View Code &lt;/&gt;
									</a>
								</div>
							</div>
						</a>
					</div>
					<div class="col-3">
						<a href="/wordle-clone/" target="_blank">
							<div class="card">
								<img class="medium-thumbnail" src="/img/wordle-thumb.png" />
								<div class="card-content">
									<div>
										<h5>Wordle Clone</h5>
									</div>
									<a
										href="https://github.com/followthedopamine/wordle-clone"
										target="_blank"
										class="btn"
									>
										View Code &lt;/&gt;
									</a>
								</div>
							</div>
						</a>
					</div>
					<div class="col-3">
						<a href="/stacker-game-js/" target="_blank">
							<div class="card right-card">
								<img
									class="medium-thumbnail right-thumbnail"
									src="/img/stacker-thumb.png"
								/>

								<div class="card-content">
									<div>
										<h5>Stacker</h5>
									</div>
									<a
										href="https://github.com/followthedopamine/stacker-game-js"
										target="_blank"
										class="btn"
									>
										View Code &lt;/&gt;
									</a>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
`;
let rawCodeProgress = "";
let charCount = 0;
const blue = "#61afef";
const red = "#e06c75";
const gray = "#4b5263";
const orange = "#e5c07b";
const green = "#98c379";
const white = "#abb2bf";
const darkGray = "#4b5263";
let colour = red;
let lineNumber = 1;
const increment = 10;

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
  if (code.charAt(charCount) == "") return;
  if (charCount == 0) {
    textEditor.innerHTML = "";
  }
  let segment = "";
  let html = "";
  for (let i = 0; i < increment; i++) {
    char = code.charAt(charCount);
    if (char != "&emsp;") {
      charCount++;
    }
    segment += char;
    html += displayCode(char);
    rawCodeProgress += char;
  }
  updateHTML();
  textContainer.scrollTo(0, textContainer.scrollHeight);
};

const skipTyping = () => {
  setInterval(updateSite, 10);
};

const textEditor = document.getElementById("text-editor");
const textContainer = document.getElementById("text-container");
const rightSplit = document.getElementById("right-split");
const cursor = document.createElement("span");
const input = document.createElement("input");
const skipTypingButton = document.getElementById("skip-btn");

const main = () => {
  cursor.classList.add("blinking-cursor");
  cursor.innerHTML = "|";
  document.body.addEventListener("keydown", handleInput);
  skipTypingButton.addEventListener("click", skipTyping);
  textContainer.appendChild(cursor);
  textContainer.appendChild(input);
};

const handleInput = () => {
  updateSite();
};

main();
//skipTyping();
