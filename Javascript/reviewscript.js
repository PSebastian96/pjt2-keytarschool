let reviewContainer = document.getElementById("review-container");

let nextBttn= document.getElementById("next");
let prevBttn= document.getElementById("prev");

nextBttn.addEventListener("click", () => {
    a = (b+a+1) % b;
    dispReview();
});

prevBttn.addEventListener("click", () => {
    a = (b+a-1) % b;
    dispReview();
});

let dispReview = () => {
    reviewContainer.innerHTML = `
    <p>${reviews[a].review}<p>
    <img src=${reviews[a].image} id="rev-img">
    <h3>${reviews[a].name}</h3>
    <h6>${reviews[a].occupation}</h6>
    `;
};
window.onload = dispReview;