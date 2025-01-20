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
  if (!contractSpan) return;

  const contractText = contractSpan.textContent.trim();

  // Modern approach using navigator.clipboard (requires HTTPS or localhost)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(contractText).then(
      () => {
        alert("Contract address copied to clipboard!");
      },
      (err) => {
        console.error("Clipboard error: ", err);
        fallbackCopyText(contractText);
      }
    );
  } else {
    // Fallback for older browsers or non-HTTPS
    fallbackCopyText(contractText);
  }
}

// Fallback method: Create a temp textarea, copy from it, then remove it
function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  // Move outside the visible area
  textArea.style.position = "fixed";
  textArea.style.left = "-99999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    if (document.execCommand("copy")) {
      alert("Contract address copied to clipboard!");
    } else {
      alert("Failed to copy address. Please copy manually.");
    }
  } catch (err) {
    console.error("Fallback copy error: ", err);
    alert("Failed to copy address. Please copy manually.");
  }
  textArea.remove();
}

