const reviews = document.querySelector("#reviewsRow");
const reviewForm = document.querySelector("#reviewForm");
const reviewTitle = document.querySelector("#reviewTitle");
const reviewText = document.querySelector("#reviewText");
const reviewName = document.querySelector("#reviewName");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newReview = `<div class="col-lg-4 col-md-6 py-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title">${reviewTitle.value}</h4>
                                    <blockquote class="blockquote mb-0">
                                        <p class="card-text">${reviewText.value}</p>
                                        <footer class="text-end blockquote-footer"><i>${reviewName.value || "Anonymous"}</i></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>`;

    reviews.innerHTML += newReview;
})