
const moreInfoDialogs = document.querySelectorAll(".more-info")
const learnMoreButtons = document.querySelectorAll(".learn-more-button")
const closeLearnMoreButtons = document.querySelectorAll(".close-learn-more")

const trailerDialogs = document.querySelectorAll(".trailer")
const trailerButtons = document.querySelectorAll(".trailer-button")
const closeTrailerButtons = document.querySelectorAll(".close-trailer")

moreInfoDialogs.forEach((dialog, index) => {
    learnMoreButtons[index].addEventListener("click", () => {
        dialog.showModal()
    })
})

moreInfoDialogs.forEach((dialog, index) => {
    closeLearnMoreButtons[index].addEventListener("click", () => {
        dialog.close()
    })
})

trailerDialogs.forEach((dialog, index) => {
    trailerButtons[index].addEventListener("click", () => {
        dialog.showModal()
    })
})

trailerDialogs.forEach((dialog, index) => {
    closeTrailerButtons[index].addEventListener("click", () => {
        dialog.close()
    })
})


const posters = document.querySelectorAll(".poster-gallery img");

posters.forEach(poster => {
    poster.addEventListener("click", () => {

        // If this poster is already selected, deselect it
        if (poster.classList.contains("selected")) {
            poster.classList.remove("selected");
        } else {
            // Deselect all other posters
            posters.forEach(p => {
                p.classList.remove("selected");
            });

            // Select the clicked poster
            poster.classList.add("selected");
        }
    });
});


const recommendationForm = document.querySelector("#recommendation-form");
const recommendationResult = document.querySelector("#recommendation-result");

recommendationForm.addEventListener("submit", event => {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered into the form
    const name = document.querySelector("#name").value.trim();
    const movie = document.querySelector("#movie").value.trim();
    const reason = document.querySelector("#reason").value.trim();

    // Display the recommendation
    recommendationResult.innerHTML = `
        <h3>Thanks for your recommendation, ${name}!</h3>
        <p>You recommended <strong>${movie}</strong>.</p>
        <p>Reason: ${reason}</p>
    `;

    // Clear the form after submission
    recommendationForm.reset();
});
