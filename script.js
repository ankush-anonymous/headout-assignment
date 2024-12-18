const form = document.getElementById("reviewForm");
const feedbackDiv = document.getElementById("formFeedback");
const ratingGroup = document.querySelector(".rating-group");
const detractorTag = document.getElementById("detractor");
const passiveTag = document.getElementById("passive");
const promoterTag = document.getElementById("promoter");
const starInputs = document.querySelectorAll(".star-rating input");

starInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const rating = parseInt(input.value, 10);

    // Remove all active classes first
    detractorTag.classList.remove("active");
    passiveTag.classList.remove("active");
    promoterTag.classList.remove("active");

    // Activate the appropriate tag based on the rating
    if (rating <= 6) {
      detractorTag.classList.add("active");
    }

    if (rating >= 7 && rating <= 8) {
      passiveTag.classList.add("active");
    }

    if (rating >= 9) {
      promoterTag.classList.add("active");
    }
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Collect form data
  const formData = {
    productId: form.productId.value,
    rating: form.rating.value,
    review: form.review.value,
    npsCategory: determineNPSCategory(form.rating.value), // Determine category
  };

  feedbackDiv.classList.remove("hidden");
  feedbackDiv.textContent = "Submitting your review...";

  try {
    // Send data to the proxy server
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzzq4AlfUonWPyG3cR_I5RaazicD4bVB_uxPHx83t-lX0Z4vdK8d4jJt1QSu4qiaQ/exec", // Proxy endpoint
      // "https://headout-assignment-backend.onrender.com/proxy", // Proxy endpoint
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    // Handle success or failure
    if (result.status === "success") {
      feedbackDiv.textContent = result.message;
    } else {
      feedbackDiv.textContent = "Failed to record review: " + result.message;
    }
  } catch (error) {
    feedbackDiv.textContent = "An error occurred.";
    console.error("Error:", error);
  }
});

// Helper function to determine NPS category
function determineNPSCategory(rating) {
  const score = parseInt(rating, 10);
  if (score >= 9) return "Promoter";
  if (score >= 7) return "Passive";
  return "Detractor";
}
