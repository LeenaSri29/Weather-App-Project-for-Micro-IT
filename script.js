
function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const history = document.getElementById("history");
  const li = document.createElement("li");
  li.textContent = entry;
  history.prepend(li);
}
