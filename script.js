// Current Year in Footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll to the Buy section
function scrollToBuyOptions() {
  const buyOptionsSection = document.getElementById('buy-options');
  if (buyOptionsSection) {
    buyOptionsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Example placeholders for buy interactions
function buyWithCard() {
  alert("Redirecting to a secure payment gateway for card purchase...");
}

function buyWithCrypto() {
  alert("Redirecting to a DEX or wallet connection for crypto purchase...");
}

function copyContractAddress() {
  const contractSpan = document.getElementById("contract-address");
  const contractText = contractSpan ? contractSpan.textContent : "";
  if (contractText) {
    navigator.clipboard.writeText(contractText).then(() => {
      alert("Contract address copied to clipboard!");
    });
  }
}
