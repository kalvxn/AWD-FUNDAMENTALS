const variablesBtn = document.getElementById("variablesBtn");
const inputOutputBtn = document.getElementById("inputOutputBtn");
const conditionalsBtn = document.getElementById("conditionalsBtn");
const loopsBtn = document.getElementById("loopsBtn");

variablesBtn.addEventListener("click", () => showDemo("variables"));
inputOutputBtn.addEventListener("click", () => showDemo("inputOutput"));
conditionalsBtn.addEventListener("click", () => showDemo("conditionals"));
loopsBtn.addEventListener("click", () => showDemo("loops"));

function showDemo(type) {
  const demoDiv = document.getElementById("demo");
  demoDiv.innerHTML = "";

  if (type === "variables") {
    const message = "Every great journey begins with a small step.";
    demoDiv.innerHTML = `<h2>Variable Declaration</h2><p>Message: "${message}"</p>`;
  } else if (type === "inputOutput") {
    demoDiv.innerHTML = `
      <h2>Input and Output</h2>
      <p>Enter a goal you'd like to achieve:</p>
      <input type="text" id="goalInput" placeholder="Your goal">
      <button id="goalBtn">Submit</button>
      <p id="goalOutput"></p>
    `;
    document.getElementById("goalBtn").addEventListener("click", displayGoal);
  } else if (type === "conditionals") {
    demoDiv.innerHTML = `
      <h2>Conditional Statements</h2>
      <p>Choose a path for self-improvement:</p>
      <select id="path">
        <option value="learning">Focus on Learning</option>
        <option value="health">Focus on Health</option>
        <option value="relationships">Focus on Relationships</option>
      </select>
      <button id="pathBtn">Analyze</button>
      <p id="pathAnalysis"></p>
    `;
    document.getElementById("pathBtn").addEventListener("click", evaluatePath);
  } else if (type === "loops") {
    demoDiv.innerHTML = `
      <h2>Looping Statements</h2>
      <p>Click the button to generate affirmations:</p>
      <button id="affirmationsBtn">Generate Affirmations</button>
      <ul id="affirmationsList"></ul>
    `;
    document.getElementById("affirmationsBtn").addEventListener("click", generateAffirmations);
  }
}

function displayGoal() {
  const goal = document.getElementById("goalInput").value;
  document.getElementById("goalOutput").innerText = `Your goal is: "${goal}". Stay committed!`;
}

function evaluatePath() {
  const path = document.getElementById("path").value;
  let analysis;

  if (path === "learning") {
    analysis = "Invest in knowledge and skills. They are lifelong assets.";
  } else if (path === "health") {
    analysis = "Health is wealth. Prioritize your well-being.";
  } else if (path === "relationships") {
    analysis = "Strong relationships enrich life. Nurture them.";
  }

  document.getElementById("pathAnalysis").innerText = analysis;
}

function generateAffirmations() {
  const affirmations = [
    "I am capable of achieving great things.",
    "Each day, I grow stronger and wiser.",
    "I overcome challenges with grace.",
    "I am deserving of success and happiness.",
    "My efforts are building a brighter future."
  ];

  const list = document.getElementById("affirmationsList");
  list.innerHTML = "";

  for (let i = 0; i < affirmations.length; i++) {
    const li = document.createElement("li");
    li.innerText = affirmations[i];
    list.appendChild(li);
  }
}
