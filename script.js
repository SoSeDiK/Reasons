let reasons = [];
let currentReasonIndex = 0;

const whyButton = document.getElementById("why-button");
const reasonsContainer = document.getElementById("reasons");

async function fetchReasons() {
  try {
    const response = await fetch("reasons.txt");
    const text = await response.text();
    reasons = text.split("\n");
  } catch (error) {
    console.error("Error fetching reasons:", error);
  }

  //   for (let i = 0; i < reasons.length; i++) {
  //     showNextReason();
  //   }
}

function showNextReason() {
  if (currentReasonIndex < reasons.length - 1) {
    const reasonDiv = document.createElement("div");
    reasonDiv.classList.add("reason");

    const reasonNumSpan = document.createElement("span");
    const reasonTextSpan = document.createElement("span");

    reasonNumSpan.classList.add("num", "column");
    reasonNumSpan.textContent = `#${currentReasonIndex + 1}`;

    reasonTextSpan.classList.add("text", "column");
    reasonTextSpan.textContent = reasons[currentReasonIndex];

    reasonDiv.appendChild(reasonNumSpan);
    reasonDiv.appendChild(reasonTextSpan);

    reasonsContainer.appendChild(reasonDiv);

    reasonsContainer.scrollTop = reasonsContainer.scrollHeight;
  } else if (currentReasonIndex === reasons.length - 1) {
    whyButton.textContent = reasons[currentReasonIndex];
  }
  currentReasonIndex++;
}

whyButton.addEventListener("click", showNextReason);

fetchReasons();
