function createDiagnosticBars(containerId, fillLevel) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const totalUnits = 22;

  for (let i = 0; i < totalUnits; i++) {
    const unit = document.createElement("div");
    unit.className = "tox-unit";

    if (i < fillLevel) {
      unit.style.opacity = "0.7";
    } else if (i < fillLevel + 4) {
      unit.classList.add("warning");
      if (Math.random() > 0.5) unit.style.opacity = "0.3";
    } else {
      unit.style.opacity = "0.1";
    }

    container.appendChild(unit);
  }
}

createDiagnosticBars("bar-00", 18);
createDiagnosticBars("bar-01", 12);
createDiagnosticBars("bar-02", 5);
createDiagnosticBars("bar-03", 15);
